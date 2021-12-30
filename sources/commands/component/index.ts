import Inquirer from 'inquirer';

import { createComponent } from './create';

enum ComponentAction {
  create = 'Create',
  back = 'Back',
}

const doComponentGroupAction = async () => {
  const { action } = await Inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'Which action do you want to do?',
    choices: Object.values(ComponentAction),
    default: ComponentAction.back,
  });

  switch (action) {
    case ComponentAction.create:
      await createComponent();
      break;

    case ComponentAction.back:
      return;
  }
};

export { doComponentGroupAction };
