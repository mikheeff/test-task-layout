import { ButtonType } from '@/types/ButtonType';
import { IconName } from '@/types/IconName';
import { computed } from 'vue';

export interface ButtonProps {
  type?: ButtonType;
  iconName?: IconName;
  isIcon?: boolean;
  isIconSmall?: boolean;
  isIconLarge?: boolean;
  isSmall?: boolean;
}

export function useButton(props: ButtonProps) {

  const BUTTON_CLASS_MAP: Record<ButtonType, string> = {
    [ButtonType.DEFAULT]: 'app-button--default',
    [ButtonType.PRIMARY]: 'app-button--primary',
    [ButtonType.SECONDARY]: 'app-button--secondary',
    [ButtonType.OUTLINE]: 'app-button--outline',
    [ButtonType.LIGHT]: 'app-button--light',
  };

  const classes = computed(() => {
    return {
      [BUTTON_CLASS_MAP[props?.type ?? ButtonType.DEFAULT]]: true,
      'app-button--icon': props.isIcon,
      'app-button--icon-small': props.isIconSmall,
      'app-button--icon-large': props.isIconLarge,
      'app-button--small': props.isSmall,
    };
  });

  return {
    classes
  };
}
