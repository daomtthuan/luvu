import Inquirer from 'inquirer';

import { doComponentGroupAction } from './component';

enum ActionGroup {
  component = 'Component',
  exit = 'Exit',
}

(async function () {
  let exit = false;
  while (!exit) {
    const { actionGroup } = await Inquirer.prompt({
      type: 'list',
      name: 'actionGroup',
      message: 'Which action group do you want to do?',
      choices: Object.values(ActionGroup),
      default: ActionGroup.exit,
    });

    switch (actionGroup) {
      case ActionGroup.component:
        await doComponentGroupAction();
        break;

      case ActionGroup.exit:
        exit = true;
        return;
    }
  }
})();
