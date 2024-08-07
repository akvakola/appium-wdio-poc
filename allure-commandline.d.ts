declare module "allure-commandline" {
  function allure(commands: string[]): {
    on(event: string, listener: (exitCode: number) => void): void;
  };
  export = allure;
}
