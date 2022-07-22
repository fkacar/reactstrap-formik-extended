function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* eslint-disable */
import React, { Fragment } from 'react';
import { FormFeedback, FormGroup, Input, Label, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import classnames from 'classnames';
import './style.scss';

var ReactstrapFormikInput = function ReactstrapFormikInput(_ref) {
    var _classnames;

    var fields = _objectWithoutProperties(_ref.field, []),
        _ref$form = _ref.form,
        touched = _ref$form.touched,
        errors = _ref$form.errors,
        rest = _objectWithoutProperties(_ref$form, ['touched', 'errors']),
        inputOnly = _ref.inputOnly,
        inputGroupAppendAddonIcon = _ref.inputGroupAppendAddonIcon,
        onClickInputGroupAppendAddonIcon = _ref.onClickInputGroupAppendAddonIcon,
        inputGroupPrependAddonIcon = _ref.inputGroupPrependAddonIcon,
        onClickInputGroupPrependAddonIcon = _ref.onClickInputGroupPrependAddonIcon,
        inputGroupClassName = _ref.inputGroupClassName,
        props = _objectWithoutProperties(_ref, ['field', 'form', 'inputOnly', 'inputGroupAppendAddonIcon', 'onClickInputGroupAppendAddonIcon', 'inputGroupPrependAddonIcon', 'onClickInputGroupPrependAddonIcon', 'inputGroupClassName']);

    return React.createElement(
        Fragment,
        null,
        inputOnly && React.createElement(Input, Object.assign({}, props, fields, { invalid: Boolean(touched[fields.name] && errors[fields.name]) })),
        !inputOnly && React.createElement(
            Fragment,
            null,
            React.createElement(
                Label,
                { 'for': props.id, className: "label-color" },
                props.label
            ),
            React.createElement(
                InputGroup,
                {
                    className: classnames((_classnames = {}, _defineProperty(_classnames, inputGroupClassName, !!inputGroupClassName), _defineProperty(_classnames, 'has-append-addon', !!inputGroupAppendAddonIcon), _defineProperty(_classnames, 'has-prepend-addon', !!inputGroupPrependAddonIcon), _classnames))
                },
                inputGroupPrependAddonIcon && React.createElement(
                    InputGroupAddon,
                    {
                        addonType: 'prepend',
                        onClick: onClickInputGroupPrependAddonIcon
                    },
                    React.createElement(
                        InputGroupText,
                        { className: 'cursor-pointer' },
                        inputGroupPrependAddonIcon
                    )
                ),
                React.createElement(Input, Object.assign({}, props, fields, { invalid: Boolean(touched[fields.name] && errors[fields.name]) })),
                inputGroupAppendAddonIcon && React.createElement(
                    InputGroupAddon,
                    {
                        addonType: 'append',
                        onClick: onClickInputGroupAppendAddonIcon
                    },
                    React.createElement(
                        InputGroupText,
                        { className: 'cursor-pointer' },
                        inputGroupAppendAddonIcon
                    )
                )
            ),
            touched[fields.name] || errors[fields.name] ? React.createElement(
                FormFeedback,
                null,
                errors[fields.name]
            ) : ''
        )
    );
};
export default ReactstrapFormikInput;