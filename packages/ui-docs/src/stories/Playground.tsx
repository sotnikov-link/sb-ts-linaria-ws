import { Checkbox } from '@example/ui';
import { styled } from 'linaria/react';
import * as React from 'react';
// import { BodyText } from '../../Typography';
// import { Checkbox } from '../Checkbox';

export const Playground = () => {
  const [state, setState] = React.useState({
    checked: false,
    indeterminate: false,
    disabled: false,
  });

  const handleFormChange: React.ChangeEventHandler<HTMLFormElement> = React.useCallback(
    (event) => {
      if (event.target instanceof HTMLInputElement) {
        const { name, value, type, checked } = event.target;
        const propValue = type === 'checkbox' ? checked : value;

        setState((current) => ({
          ...current,
          ...{
            [name]: propValue,
          },
        }));
      }
    },
    []
  );

  const handleCheckedChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
    (event) => {
      event.stopPropagation();
      const { currentTarget } = event;

      setState((current) => ({
        ...current,
        checked: currentTarget.checked,
      }));
    },
    []
  );

  return (
    <form onChange={handleFormChange} onSubmit={preventDefault}>
      <h1>Компонент Checkbox</h1>

      <p>
        Используются для списка параметров, в котором пользователь может выбрать
        один или несколько параметров, включая все или ни одного.
      </p>

      <p>
        Чекбокс допускает три состояния: выбранный , невыбранный и
        неопределенный. Последнее состояние вступает в действие, когда основной
        список параметров содержит подсписок параметров, некоторые из которых
        выбраны, а некоторые - нет.
      </p>

      <p>
        Пользователь может выбрать чекбокс, кликнув непосредственно по полю или
        нажав на его текстовый ярлык.
      </p>

      <h2>Реализация «неопределенного состояния»</h2>

      <p>
        Приоритет свойства indeterminate выше, чем у checked. Если indeterminate
        положительный, то вне зависимости от значения checked будет показано
        неопределенное состояние.
      </p>

      <p>
        Данное свойство не использует одноименное{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://developer.mozilla.org/ru/docs/Web/CSS/:indeterminate"
        >
          нативное состояние indeterminate, которое поддерживается современными
          браузерами и IE11
        </a>
        .
      </p>
      <p>
        Проблема нативной реализации:{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://css-tricks.com/indeterminate-checkboxes/"
        >
          нельзя определить indeterminate через HTML
        </a>
        , из-за чего приходится писать JS обвязку, которая усложняет логику
        всего компонента.
      </p>
      <p>
        Поэтому свойство indeterminate реализует свою логику через атрибут
        data-indeterminate,{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/mui-org/material-ui/blob/50c0bbc3a2040c9945f5009a6bd56292d216f236/packages/material-ui/src/Checkbox/Checkbox.js#L87"
        >
          как это сделано в Material UI
        </a>
        .
      </p>

      <h2>Playground</h2>

      <FieldSet>
        <legend>Props</legend>
        <Flex>
          <Box>
            <label>
              <input
                type="checkbox"
                name={'checked' /** @todo nameof(state.checked) */}
                checked={state.checked}
                onChange={handleCheckedChange}
              />{' '}
              {'checked' /** @todo nameof(state.checked) */}
            </label>
          </Box>

          <Box>
            <label>
              <input
                type="checkbox"
                name={'indeterminate' /** @todo nameof(state.indeterminate) */}
                defaultChecked={state.indeterminate}
              />{' '}
              {'indeterminate' /** @todo nameof(state.indeterminate) */}
            </label>
          </Box>

          <Box>
            <label>
              <input
                type="checkbox"
                name={'disabled' /** @todo nameof(state.disabled) */}
                defaultChecked={state.disabled}
              />{' '}
              {'disabled' /** @todo nameof(state.disabled) */}
            </label>
          </Box>
        </Flex>
      </FieldSet>

      <FieldSet>
        <legend>Result</legend>

        <Flex>
          <Box>
            <ColumnHeader>Без текста</ColumnHeader>
            <Checkbox
              onChange={handleCheckedChange}
              checked={state.checked}
              indeterminate={state.indeterminate}
              disabled={state.disabled}
            />
          </Box>

          <Box>
            <ColumnHeader>С коротким текстом</ColumnHeader>
            <Checkbox
              onChange={handleCheckedChange}
              checked={state.checked}
              indeterminate={state.indeterminate}
              disabled={state.disabled}
            >
              <BodyText>Click me!</BodyText>
            </Checkbox>
          </Box>

          <Box>
            <ColumnHeader>С длинным текстом</ColumnHeader>
            <Checkbox
              onChange={handleCheckedChange}
              checked={state.checked}
              indeterminate={state.indeterminate}
              disabled={state.disabled}
            >
              <BodyText>
                Click on
                <br />
                multiline label
              </BodyText>
            </Checkbox>
          </Box>
        </Flex>
      </FieldSet>
    </form>
  );
};

Playground.displayName = 'Playground' /** @todo nameof(Playground) */;

const preventDefault = (event: React.FormEvent) => {
  event.preventDefault();
};

const FieldSet = styled.fieldset`
  border: 1px solid lightgray;
  margin: 1em 0;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Box = styled.div`
  margin: 0.5em;
`;

const ColumnHeader = styled.p`
  font-weight: bold;
  margin: 0;
`;

/** @todo заменить на компонент из uikit */
const BodyText = styled.p``;
