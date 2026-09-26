{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs =
    { nixpkgs, ... }:
    let
      inherit (nixpkgs) lib;
      eachSystem = lib.genAttrs lib.systems.flakeExposed;
    in
    {
      devShells = eachSystem (
        system:
        let
          pkgs = import nixpkgs { inherit system; };

          version = (lib.importJSON ./package.json).devEngines.packageManager.version;

          pnpmSrc =
            {
              x86_64-linux = {
                npmPkg = "linux-x64";
                hash = "sha256-N5LtElJxhHRbC0rdnaQHM2IhZppF+TbaHQdX88XDDdw=";
              };
              aarch64-linux = {
                npmPkg = "linux-arm64";
                hash = "sha256-HgWzu03+aaSOow/aBnus2xsK2kUS6gMeV6UoOhspiYA=";
              };
            }
            .${system} or (throw "no pnpm binary mapping for ${system}");

          pnpm = pkgs.stdenv.mkDerivation {
            pname = "pnpm";
            inherit version;

            src = pkgs.fetchzip {
              url = "https://registry.npmjs.org/@pnpm/exe.${pnpmSrc.npmPkg}/-/exe.${pnpmSrc.npmPkg}-${version}.tgz";
              hash = pnpmSrc.hash;
            };

            dontConfigure = true;
            dontBuild = true;

            nativeBuildInputs = [ pkgs.autoPatchelfHook ];
            buildInputs = [ pkgs.stdenv.cc.cc.lib ];

            installPhase = ''
              mkdir -p $out/bin
              install -m755 pnpm $out/bin/pnpm
            '';
          };

        in
        {
          default = pkgs.mkShell {
            packages = [
              pnpm
            ];
          };
        }
      );
    };
}
