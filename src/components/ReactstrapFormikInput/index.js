/* eslint-disable */
import React, { Fragment } from 'react';
import {FormFeedback, FormGroup, Input, Label, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";
import classnames from 'classnames';
import './style.scss'

const ReactstrapFormikInput = (
    {
        field: {...fields},
        form: {touched, errors, ...rest},
        inputOnly,
        inputGroupAppendAddonIcon,
        onClickInputGroupAppendAddonIcon,
        inputGroupPrependAddonIcon,
        onClickInputGroupPrependAddonIcon,
        inputGroupClassName,
        isErrorMessagesDisabled,
        ...props
    }) => (
        <Fragment>
            {inputOnly && (
                <Input {...props} {...fields} invalid={Boolean(touched[fields.name] && errors[fields.name])}/>
            )}
            {!inputOnly && (
                <Fragment>
                    <Label for={props.id} className={"label-color"}>{props.label}</Label>
                    <InputGroup
                        className={classnames({
                            [inputGroupClassName]: !!inputGroupClassName,
                            'has-append-addon': !!inputGroupAppendAddonIcon,
                            'has-prepend-addon': !!inputGroupPrependAddonIcon
                        })}
                    >
                        {inputGroupPrependAddonIcon && (
                            <InputGroupAddon
                                addonType="prepend"
                                onClick={onClickInputGroupPrependAddonIcon}
                            >
                                <InputGroupText className='cursor-pointer'>{inputGroupPrependAddonIcon}</InputGroupText>
                            </InputGroupAddon>
                        )}
                        <Input {...props} {...fields} invalid={Boolean(touched[fields.name] && errors[fields.name])}/>
                        {inputGroupAppendAddonIcon && (
                            <InputGroupAddon
                                addonType="append"
                                onClick={onClickInputGroupAppendAddonIcon}
                            >
                                <InputGroupText className='cursor-pointer'>{inputGroupAppendAddonIcon}</InputGroupText>
                            </InputGroupAddon>
                        )}
                    </InputGroup>
                    {!isErrorMessagesDisabled && (touched[fields.name] || errors[fields.name] ? <FormFeedback>{errors[fields.name]}</FormFeedback> : '')}
                </Fragment>
            )}
        </Fragment>
);
export default ReactstrapFormikInput;
