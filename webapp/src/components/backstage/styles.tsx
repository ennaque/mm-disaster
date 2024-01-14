import styled, {createGlobalStyle} from 'styled-components';

export const GlobalSelectStyle = createGlobalStyle`
    .playbooks-rselect__control.playbooks-rselect__control {
        transition: all 0.15s ease;
        transition-delay: 0s;
        background-color: transparent;
        border-radius: 4px;
        border: none;
        box-shadow: inset 0 0 0 1px rgba(var(--center-channel-color-rgb), 0.16);
        width: 100%;
        font-size: 14px;

        &--is-focused {
            box-shadow: inset 0 0 0px 2px var(--button-bg);
        }
    }

    .playbooks-rselect--is-disabled {
        opacity: 0.56;
    }

    .playbooks-rselect__control,
    .playbooks-rselect__menu {
        .playbooks-rselect__menu-list {
            background-color: var(--center-channel-bg);
            border: none;
        }

        .playbooks-rselect__input {
            color: var(--center-channel-color);
        }

        .playbooks-rselect__option--is-selected {
            background-color: rgba(var(--center-channel-color-rgb), 0.08);
            color: inherit;
        }

        .playbooks-rselect__option--is-focused {
            background-color: rgba(var(--center-channel-color-rgb), 0.16);
        }

        .playbooks-rselect__option {
            &:active {
                background-color: rgba(var(--center-channel-color-rgb), 0.08);
            }
        }

        .playbooks-rselect__single-value {
            color: var(--center-channel-color);
        }

        .playbooks-rselect__multi-value {
            height: 20px;
            line-height: 19px;
            background-color: rgba(var(--center-channel-color-rgb), 0.08);
            border-radius: 10px;
            padding-left: 8px;

            .playbooks-rselect__multi-value__label {
                padding: 0;
                color: var(--center-channel-color);
            }

            .playbooks-rselect__multi-value__remove {
                color: rgba(var(--center-channel-bg-rgb), 0.80);
            }
        }
    }
`;

export const CenteredRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
