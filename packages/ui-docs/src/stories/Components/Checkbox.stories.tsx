import styled from '@emotion/styled';
import { Checkbox } from '@example/ui';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { LiveSet } from '../../utils';

export default {
  /** @todo nameof */
  title: `Components/Checkbox`,
  component: Checkbox,
};

export const Simple = () => (
  <Checkbox onClick={action('clicked')}>Hello Checkbox</Checkbox>
);

export const Emoji = () => (
  <Checkbox onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Checkbox>
);

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
      <FieldSet>
        <legend>Props</legend>
        <Flex>
          <Box>
            <label>
              <input
                type="checkbox"
                name={nameof(state.checked)}
                checked={state.checked}
                onChange={handleCheckedChange}
              />{' '}
              {nameof(state.checked)}
            </label>
          </Box>

          <Box>
            <label>
              <input
                type="checkbox"
                name={nameof(state.indeterminate)}
                defaultChecked={state.indeterminate}
              />{' '}
              {nameof(state.indeterminate)}
            </label>
          </Box>

          <Box>
            <label>
              <input
                type="checkbox"
                name={nameof(state.disabled)}
                defaultChecked={state.disabled}
              />{' '}
              {nameof(state.disabled)}
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
const BodyText = styled.p`
  margin: 0;
`;

export const LiveCode = () => <LiveSet components={{ Checkbox }} />;
