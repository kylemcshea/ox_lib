import { ContextMenuProps } from '../../../interfaces/context';
import { debugData } from '../../../utils/debugData';

export const debugContext = () => {
  debugData<ContextMenuProps>([
    {
      action: 'showContext',
      data: {
        title: 'Vehicle garage',
        options: [
          { title: 'Empty button' },
          {
            title: 'Example button',
            description: 'Example button description',
            icon: 'inbox',
            image: 'https://i.imgur.com/YAe7k17.jpeg',
            metadata: [{ label: 'Value 1', value: 300 }],
          },
          {
            title: 'Menu button',
            icon: 'bars',
            menu: 'other_example_menu',
            description: 'Takes you to another menu',
            metadata: ['It also has metadata support'],
          },
          {
            title: 'Event button',
            description: 'Open a menu and send event data',
            icon: 'check',
            arrow: true,
            event: 'some_event',
            args: { value1: 300, value2: 'Other value' },
          },
        ],
      },
    },
  ]);
};
