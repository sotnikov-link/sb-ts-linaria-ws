import { css, cx } from 'linaria';
import { styled } from 'linaria/react';
import * as React from 'react';
import { colors } from '../colors';
import disabledCursor from '../icons/disabledCursor.cur';
import checkDisabledIcon from './icons/check-disabled.svg';
import checkIcon from './icons/check.svg';
import indeterminateDisabledIcon from './icons/indeterminate-disabled.svg';
import indeterminateIcon from './icons/indeterminate.svg';

/**
 * Свойства компонента Checkbox
 */
export type CheckboxProps = InputProps &
  React.PropsWithChildren<
    Partial<{
      /**
       * Неопределенное состояние
       *
       * Приоритет свойства indeterminate выше, чем у checked.
       * Если `indeterminate` положительный, то вне зависимости от значения
       * `checked` будет показано неопределенное состояние.
       *
       * Данное свойство не использует одноименное [нативное состояние
       * indeterminate, которое поддерживается современными браузерами и IE11](
       * https://developer.mozilla.org/ru/docs/Web/CSS/:indeterminate
       * ).
       *
       * Проблема нативной реализации: [нельзя определить indeterminate
       * через HTML](https://css-tricks.com/indeterminate-checkboxes/), из-за чего
       * приходится писать JS обвязку, которая усложняет логику всего компонента.
       *
       * Поэтому свойство indeterminate реализует свою логику через атрибут
       * data-indeterminate,
       * [как это сделано в Material UI](https://git.io/JfzQ6).
       */
      indeterminate: boolean;
    }>
  >;

/**
 * Компонент Checkbox
 */
export const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>(
  ({ children, ...props }, ref) => (
    <Label ref={ref}>
      <Input
        {...props}
        className={cx(iconBaseClassName, props.className)}
        type="checkbox"
        data-indeterminate={props.indeterminate === true || void 0}
      />

      <Icon className={cx(iconBaseClassName)} />

      {children && <ChildrenWrapper>{children}</ChildrenWrapper>}
    </Label>
  )
);

Checkbox.displayName = nameof(Checkbox);

const iconWidth = '20px';

const iconBaseClassName = css`
  display: block;
  position: absolute;
  top: 0;
  left: -${iconWidth};
  width: ${iconWidth};
  height: 20px;
  box-sizing: border-box;
  margin: 1px 0 3px;
`;

const Label = styled.label`
  display: inline-flex;
  margin: 16px 0 16px ${iconWidth};
  position: relative;

  &::after {
    display: block;
    content: ' ';
    width: 0;
    min-height: 24px;
  }
`;

const Icon = styled.span`
  border-radius: 3px;
  background-position: center center;
  border-width: 1px;
  border-style: solid;
`;

const iconClassName = (Icon as unknown) as string;

const ChildrenWrapper = styled.span`
  padding-left: 8px;
`;

const childrenWrapperClassName = (ChildrenWrapper as unknown) as string;

const Input = styled.input`
  /*
  Нельзя использовать display: none, чтобы работал «фокус по Tab»,
  поэтому скрываем элемент безопасным способом через opacity
  */
  opacity: 0;

  &,
  & + ${iconClassName}, & + ${iconClassName} + ${childrenWrapperClassName} {
    cursor: pointer;
  }

  & + ${iconClassName} {
    background-color: ${colors.neutral.n0};
    border-color: ${colors.neutral.n350};

    &:hover {
      border-color: ${colors.neutral.n560};
    }

    &:active {
      background-color: ${colors.neutral.n120};
    }
  }

  &:focus + ${iconClassName} {
    border-color: ${colors.neutral.n560};
  }

  &:checked,
  &[data-indeterminate] {
    & + ${iconClassName} {
      background-color: ${colors.blue.n530};
      border-color: ${colors.blue.n530};

      &:hover {
        background-color: ${colors.blue.n650};
        border-color: ${colors.blue.n650};
      }

      &:active {
        background-color: ${colors.blue.n740};
        border-color: ${colors.blue.n740};
      }
    }

    &:focus + ${iconClassName} {
      background-color: ${colors.blue.n650};
      border-color: ${colors.blue.n650};
    }
  }

  &:checked + ${iconClassName} {
    background-image: url(${checkIcon});
  }

  &[data-indeterminate] + ${iconClassName} {
    background-image: url(${indeterminateIcon});
  }

  &:disabled {
    &,
    & + ${iconClassName}, & + ${iconClassName} + ${childrenWrapperClassName} {
      cursor: url(${disabledCursor}), auto;
    }

    & + ${iconClassName}, & + ${iconClassName}:hover {
      background-color: ${colors.neutral.n70};
      border-color: ${colors.neutral.n230};
    }

    &:checked + ${iconClassName} {
      background-image: url(${checkDisabledIcon});
    }

    &[data-indeterminate] + ${iconClassName} {
      background-image: url(${indeterminateDisabledIcon});
    }
  }
`;

type InputProps = React.ComponentProps<typeof Input>;
