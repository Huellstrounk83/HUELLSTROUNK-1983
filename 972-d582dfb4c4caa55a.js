(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[972],{

/***/ 3595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_0__.$)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62717);



/***/ }),

/***/ 3998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ Button),
/* harmony export */   r: () => (/* binding */ buttonVariants)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32467);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83101);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64269);





const buttonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_3__/* .cva */ .F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
            destructive: 'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
/**
 * @deprecated
 */ function Button(param) {
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__/* .Slot */ .DX : 'button';
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Comp, {
        "data-slot": "button",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    });
}



/***/ }),

/***/ 4297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  p: () => (/* reexport */ TooltipForButton)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-tooltip/dist/index.mjs
var dist = __webpack_require__(47520);
// EXTERNAL MODULE: ./src/components/ui/TooltipForButton/TooltipForButton.module.scss
var TooltipForButton_module = __webpack_require__(94438);
var TooltipForButton_module_default = /*#__PURE__*/__webpack_require__.n(TooltipForButton_module);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(85203);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// ./src/components/ui/TooltipForButton/TooltipForButton.tsx
/* __next_internal_client_entry_do_not_use__ TooltipForButton auto */ 




const TooltipForButton = (param)=>{
    let { tooltipContent, tooltipPosition, tooltipAlign = 'center', className, children } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Provider */.Kq, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dist/* Root */.bL, {
            delayDuration: 0,
            disableHoverableContent: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Trigger */.l9, {
                    asChild: true,
                    children: children
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Portal */.ZL, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dist/* Content */.UC, {
                        side: tooltipPosition,
                        align: tooltipAlign,
                        sideOffset: 6,
                        className: classnames_default()((TooltipForButton_module_default()).tooltipContent, className),
                        children: [
                            tooltipContent,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Arrow */.i3, {
                                className: (TooltipForButton_module_default()).tooltipArrow
                            })
                        ]
                    })
                })
            ]
        })
    });
};

;// ./src/components/ui/TooltipForButton/index.ts



/***/ }),

/***/ 6066:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"TextareaSimple_root__NMDRq","nj-animate-horizontal-appearance-ltr-enter":"TextareaSimple_nj-animate-horizontal-appearance-ltr-enter___YIxH","nj-animate-horizontal-appearance-ltr-enter-active":"TextareaSimple_nj-animate-horizontal-appearance-ltr-enter-active__1wneE","nj-animate-horizontal-appearance-ltr-exit":"TextareaSimple_nj-animate-horizontal-appearance-ltr-exit__0eSAd","nj-animate-horizontal-appearance-ltr-exit-active":"TextareaSimple_nj-animate-horizontal-appearance-ltr-exit-active__Ku3Wx","nj-animate-left-panel-width-reduce-enter":"TextareaSimple_nj-animate-left-panel-width-reduce-enter__QvZny","nj-animate-left-panel-width-reduce-enter-active":"TextareaSimple_nj-animate-left-panel-width-reduce-enter-active__ZLHV2","nj-animate-left-panel-width-reduce-exit":"TextareaSimple_nj-animate-left-panel-width-reduce-exit__Er4n5","nj-animate-left-panel-width-reduce-exit-active":"TextareaSimple_nj-animate-left-panel-width-reduce-exit-active__NSZ3k","nj-animate-vertical-appearance-appear":"TextareaSimple_nj-animate-vertical-appearance-appear__Ueyjk","nj-animate-vertical-appearance-appear-active":"TextareaSimple_nj-animate-vertical-appearance-appear-active__rbC21","nj-animate-vertical-appearance-enter":"TextareaSimple_nj-animate-vertical-appearance-enter___IXps","nj-animate-vertical-appearance-enter-active":"TextareaSimple_nj-animate-vertical-appearance-enter-active__PMxRF","nj-animate-vertical-appearance-exit":"TextareaSimple_nj-animate-vertical-appearance-exit__dhimw","nj-animate-vertical-appearance-exit-active":"TextareaSimple_nj-animate-vertical-appearance-exit-active__1GVpG","infinite-spinner":"TextareaSimple_infinite-spinner__btcDR","fadeIn":"TextareaSimple_fadeIn__TC1_y","blinking":"TextareaSimple_blinking__Xpamu","movingRight":"TextareaSimple_movingRight__aimHx"};

/***/ }),

/***/ 6259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hr: () => (/* binding */ DropdownMenuRadioGroup),
/* harmony export */   Ht: () => (/* binding */ DropdownMenuRadioItem),
/* harmony export */   M5: () => (/* binding */ DropdownMenuSubContent),
/* harmony export */   SQ: () => (/* binding */ DropdownMenuContent),
/* harmony export */   _2: () => (/* binding */ DropdownMenuItem),
/* harmony export */   lp: () => (/* binding */ DropdownMenuLabel),
/* harmony export */   lv: () => (/* binding */ DropdownMenuSub),
/* harmony export */   mB: () => (/* binding */ DropdownMenuSeparator),
/* harmony export */   nV: () => (/* binding */ DropdownMenuSubTrigger),
/* harmony export */   rI: () => (/* binding */ DropdownMenu),
/* harmony export */   ty: () => (/* binding */ DropdownMenuTrigger),
/* harmony export */   xd: () => (/* binding */ DropdownMenuItemTooltip)
/* harmony export */ });
/* unused harmony exports DropdownMenuPortal, DropdownMenuGroup, DropdownMenuCheckboxItem, DropdownMenuShortcut */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47971);
/* harmony import */ var _barrel_optimize_names_CheckIcon_CircleIcon_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99051);
/* harmony import */ var _components_ui_TooltipForButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4297);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64269);
/* harmony import */ var _dropdown_menu_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51480);
/* harmony import */ var _dropdown_menu_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dropdown_menu_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71203);
/* __next_internal_client_entry_do_not_use__ DropdownMenu,DropdownMenuPortal,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuGroup,DropdownMenuLabel,DropdownMenuItem,DropdownMenuItemTooltip,DropdownMenuCheckboxItem,DropdownMenuRadioGroup,DropdownMenuRadioItem,DropdownMenuSeparator,DropdownMenuShortcut,DropdownMenuSub,DropdownMenuSubTrigger,DropdownMenuSubContent auto */ 







function DropdownMenu(param) {
    let { onOpenChange, withEvent, withListener, ...props } = param;
    const id = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    const { isVisible, onVisibilitySet, onVisibilityRemove } = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useVisible */ .MI)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handler = (e)=>{
            if (e.detail !== id) {
                onVisibilityRemove();
                if (withListener && onOpenChange) {
                    onOpenChange(false);
                }
            }
        };
        document.addEventListener('dropdown:open', handler);
        return ()=>document.removeEventListener('dropdown:open', handler);
    }, [
        id,
        onVisibilityRemove
    ]);
    const handleOpenChange = (open)=>{
        if (open) {
            onVisibilitySet();
            document.dispatchEvent(new CustomEvent('dropdown:open', {
                detail: id
            }));
        } else {
            onVisibilityRemove();
        }
    };
    const onOpenChangeWrapper = (open)=>{
        if (!onOpenChange) return;
        if (open && withEvent) {
            document.dispatchEvent(new CustomEvent('dropdown:open', {
                detail: id
            }));
        }
        onOpenChange(open);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__/* .Root */ .bL, {
        open: isVisible,
        ...props,
        onOpenChange: onOpenChange ? onOpenChangeWrapper : handleOpenChange
    });
}
function DropdownMenuPortal(props) {
    return /*#__PURE__*/ _jsx(DropdownMenuPrimitive.Portal, {
        "data-slot": "dropdown-menu-portal",
        ...props
    });
}
function DropdownMenuTrigger(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__/* .Trigger */ .l9, {
        "data-slot": "dropdown-menu-trigger",
        ...props
    });
}
function DropdownMenuContent(param) {
    let { className, sideOffset = 4, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__/* .Portal */ .ZL, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__/* .Content */ .UC, {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)((_dropdown_menu_module_scss__WEBPACK_IMPORTED_MODULE_4___default().root), className),
            ...props
        })
    });
}
function DropdownMenuGroup(props) {
    return /*#__PURE__*/ _jsx(DropdownMenuPrimitive.Group, {
        "data-slot": "dropdown-menu-group",
        ...props
    });
}
function DropdownMenuItem(param) {
    let { className, inset, variant = 'default', ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__/* .Item */ .q7, {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)((_dropdown_menu_module_scss__WEBPACK_IMPORTED_MODULE_4___default().dropdownMenuItem), className),
        ...props
    });
}
function DropdownMenuItemTooltip(param) {
    let { tooltipContent, tooltipPosition, tooltipAlign = 'center', tooltipClassName, children, className, inset, variant = 'default', ...props } = param;
    const item = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__/* .Item */ .q7, {
        ...props,
        disabled: props.disabled,
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)((_dropdown_menu_module_scss__WEBPACK_IMPORTED_MODULE_4___default().dropdownMenuItem), className),
        children: children
    });
    if (!tooltipContent) return item;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_TooltipForButton__WEBPACK_IMPORTED_MODULE_2__/* .TooltipForButton */ .p, {
        tooltipContent: tooltipContent,
        tooltipPosition: tooltipPosition,
        tooltipAlign: tooltipAlign,
        className: tooltipClassName,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)((_dropdown_menu_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tooltipWrapper), {
                [(_dropdown_menu_module_scss__WEBPACK_IMPORTED_MODULE_4___default().disabled)]: props.disabled
            }),
            "aria-disabled": props.disabled,
            children: item
        })
    });
}
function DropdownMenuCheckboxItem(param) {
    let { className, children, checked, ...props } = param;
    return /*#__PURE__*/ _jsxs(DropdownMenuPrimitive.CheckboxItem, {
        "data-slot": "dropdown-menu-checkbox-item",
        className: cn(styles.dropdownMenuItem, className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("span", {
                "data-slot": "dropdown-menu-checkbox-icon",
                className: styles.dropdownMenuIndicator,
                children: /*#__PURE__*/ _jsx(DropdownMenuPrimitive.ItemIndicator, {
                    children: /*#__PURE__*/ _jsx(CheckIcon, {
                        size: 16
                    })
                })
            }),
            children
        ]
    });
}
function DropdownMenuRadioGroup(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__/* .RadioGroup */ .z6, {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    });
}
function DropdownMenuRadioItem(param) {
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__/* .RadioItem */ .hN, {
        "data-slot": "dropdown-menu-radio-item",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)((_dropdown_menu_module_scss__WEBPACK_IMPORTED_MODULE_4___default().dropdownMenuItem), className),
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                "data-slot": "dropdown-menu-radio-icon",
                className: (_dropdown_menu_module_scss__WEBPACK_IMPORTED_MODULE_4___default().dropdownMenuIndicator),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__/* .ItemIndicator */ .VF, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckIcon_CircleIcon_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                        size: 8
                    })
                })
            }),
            children
        ]
    });
}
function DropdownMenuLabel(param) {
    let { className, inset, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__/* .Label */ .JU, {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)((_dropdown_menu_module_scss__WEBPACK_IMPORTED_MODULE_4___default().dropdownMenuLabel), className),
        ...props
    });
}
function DropdownMenuSeparator(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__/* .Separator */ .wv, {
        "data-slot": "dropdown-menu-separator",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)((_dropdown_menu_module_scss__WEBPACK_IMPORTED_MODULE_4___default().dropdownMenuSeparator), className),
        ...props
    });
}
function DropdownMenuShortcut(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ _jsx("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: cn(styles.dropdownMenuShortcut, className),
        ...props
    });
}
function DropdownMenuSub(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__/* .Sub */ .Pb, {
        "data-slot": "dropdown-menu-sub",
        ...props
    });
}
function DropdownMenuSubTrigger(param) {
    let { className, inset, children, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__/* .SubTrigger */ .ZP, {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)((_dropdown_menu_module_scss__WEBPACK_IMPORTED_MODULE_4___default().dropdownMenuItem), className),
        ...props,
        children: children
    });
}
function DropdownMenuSubContent(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__/* .Portal */ .ZL, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__/* .SubContent */ .G5, {
            "data-slot": "dropdown-menu-sub-content",
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)((_dropdown_menu_module_scss__WEBPACK_IMPORTED_MODULE_4___default().root), (_dropdown_menu_module_scss__WEBPACK_IMPORTED_MODULE_4___default().subContent), className),
            ...props
        })
    });
}



/***/ }),

/***/ 12328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  p: () => (/* reexport */ TextareaSimple)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(85203);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js + 2 modules
var react_textarea_autosize_browser_esm = __webpack_require__(75880);
// EXTERNAL MODULE: ./src/types/index.ts + 2 modules
var types = __webpack_require__(37893);
// EXTERNAL MODULE: ./src/hooks/index.ts + 39 modules
var hooks = __webpack_require__(71203);
// EXTERNAL MODULE: ./src/components/ui/TextareaSimple/TextareaSimple.module.scss
var TextareaSimple_module = __webpack_require__(6066);
var TextareaSimple_module_default = /*#__PURE__*/__webpack_require__.n(TextareaSimple_module);
;// ./src/components/ui/TextareaSimple/TextareaSimple.tsx
/* __next_internal_client_entry_do_not_use__ TextareaSimple auto */ 






const TextareaSimple = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { value, isDisabled, className, onChange, onSubmit, ...rest } = param;
    const deviceInfo = (0,hooks/* useDeviceDetect */.DL)();
    const isMobileDevice = deviceInfo === null || deviceInfo === void 0 ? void 0 : deviceInfo.isMobile;
    const handleChange = (param)=>{
        let { target } = param;
        if (isDisabled) {
            return;
        }
        onChange(target.value);
    };
    const handleSubmit = (e)=>{
        if (!onSubmit || isDisabled) {
            return;
        }
        const { key, shiftKey } = e;
        if (key === types/* KeyCodes */.cK.ENTER && !isMobileDevice && !shiftKey) {
            e.preventDefault();
            onSubmit();
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react_textarea_autosize_browser_esm/* default */.A, {
        ref: ref,
        value: value,
        disabled: isDisabled,
        className: classnames_default()((TextareaSimple_module_default()).root, className),
        onChange: handleChange,
        onKeyDown: handleSubmit,
        ...rest
    });
});
TextareaSimple.displayName = 'TextareaSimple';

;// ./src/components/ui/TextareaSimple/index.tsx



/***/ }),

/***/ 16500:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"InputSimple_root__phJYl","nj-animate-horizontal-appearance-ltr-enter":"InputSimple_nj-animate-horizontal-appearance-ltr-enter__NXekR","nj-animate-horizontal-appearance-ltr-enter-active":"InputSimple_nj-animate-horizontal-appearance-ltr-enter-active__Q80bq","nj-animate-horizontal-appearance-ltr-exit":"InputSimple_nj-animate-horizontal-appearance-ltr-exit__UOP15","nj-animate-horizontal-appearance-ltr-exit-active":"InputSimple_nj-animate-horizontal-appearance-ltr-exit-active__b_B1W","nj-animate-left-panel-width-reduce-enter":"InputSimple_nj-animate-left-panel-width-reduce-enter__9nU2_","nj-animate-left-panel-width-reduce-enter-active":"InputSimple_nj-animate-left-panel-width-reduce-enter-active__3xl_d","nj-animate-left-panel-width-reduce-exit":"InputSimple_nj-animate-left-panel-width-reduce-exit___jEoc","nj-animate-left-panel-width-reduce-exit-active":"InputSimple_nj-animate-left-panel-width-reduce-exit-active__b11rq","nj-animate-vertical-appearance-appear":"InputSimple_nj-animate-vertical-appearance-appear__cNpto","nj-animate-vertical-appearance-appear-active":"InputSimple_nj-animate-vertical-appearance-appear-active__4bFHe","nj-animate-vertical-appearance-enter":"InputSimple_nj-animate-vertical-appearance-enter__DLMSi","nj-animate-vertical-appearance-enter-active":"InputSimple_nj-animate-vertical-appearance-enter-active__GwDEM","nj-animate-vertical-appearance-exit":"InputSimple_nj-animate-vertical-appearance-exit__1CShG","nj-animate-vertical-appearance-exit-active":"InputSimple_nj-animate-vertical-appearance-exit-active__j3PwJ","iosPatch":"InputSimple_iosPatch__UWgcW","infinite-spinner":"InputSimple_infinite-spinner__TCBlu","fadeIn":"InputSimple_fadeIn__FzSOP","blinking":"InputSimple_blinking__8zcOx","movingRight":"InputSimple_movingRight__qpJuB"};

/***/ }),

/***/ 17037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ ScrollBar),
/* harmony export */   F: () => (/* binding */ ScrollArea)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59034);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64269);
/* __next_internal_client_entry_do_not_use__ ScrollArea,ScrollBar auto */ 



function ScrollArea(param) {
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_3__/* .Root */ .bL, {
        "data-slot": "scroll-area",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('relative', className),
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_3__/* .Viewport */ .LM, {
                asChild: true,
                "data-slot": "scroll-area-viewport",
                className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1 !min-w-auto !flex overflow-x-scroll",
                children: children
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ScrollBar, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_3__/* .Corner */ .OK, {})
        ]
    });
}
function ScrollBar(param) {
    let { className, orientation = 'vertical', ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_3__/* .ScrollAreaScrollbar */ .VM, {
        "data-slot": "scroll-area-scrollbar",
        orientation: orientation,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('flex touch-none p-px transition-colors select-none', orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent', orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent', className),
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_3__/* .ScrollAreaThumb */ .lr, {
            "data-slot": "scroll-area-thumb",
            className: "bg-border relative flex-1 rounded-full"
        })
    });
}



/***/ }),

/***/ 20243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ Skeleton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88661);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64269);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12115);
/* __next_internal_client_entry_do_not_use__ Skeleton auto */ 



function Skeleton(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ...props,
        className: "jsx-d373d32fac1e276a" + " " + (props && props.className != null && props.className || (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('relative overflow-hidden rounded-md', 'bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10', 'background-animate', className) || ""),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "jsx-d373d32fac1e276a" + " " + "shimmer-wrapper",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "jsx-d373d32fac1e276a" + " " + "shimmer"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "d373d32fac1e276a",
                children: ".background-animate.jsx-d373d32fac1e276a{background-size:200%200%;animation:gradientAnimation 2s ease infinite}@keyframes gradientAnimation{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}.shimmer-wrapper.jsx-d373d32fac1e276a{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden}.shimmer.jsx-d373d32fac1e276a{width:50%;height:100%;background:linear-gradient(90deg,rgba(255,255,255,0)0%,rgba(255,255,255,.3)50%,rgba(255,255,255,0)100%);animation:shimmerAnimation 1.5s infinite;position:absolute;top:0;left:-150%}@keyframes shimmerAnimation{to{left:150%}}"
            })
        ]
    });
}



/***/ }),

/***/ 26333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AM: () => (/* binding */ Popover),
/* harmony export */   Rp: () => (/* binding */ PopoverArrow),
/* harmony export */   Wv: () => (/* binding */ PopoverTrigger),
/* harmony export */   dT: () => (/* binding */ PopoverAnchor),
/* harmony export */   hl: () => (/* binding */ PopoverContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82286);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64269);
/* __next_internal_client_entry_do_not_use__ Popover,PopoverTrigger,PopoverContent,PopoverAnchor,PopoverArrow auto */ 



function Popover(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__/* .Root */ .bL, {
        "data-slot": "popover",
        ...props
    });
}
function PopoverTrigger(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__/* .Trigger */ .l9, {
        "data-slot": "popover-trigger",
        ...props
    });
}
function PopoverContent(param) {
    let { className, align = 'center', sideOffset = 4, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__/* .Portal */ .ZL, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__/* .Content */ .UC, {
            "data-slot": "popover-content",
            align: align,
            sideOffset: sideOffset,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden', className),
            ...props
        })
    });
}
function PopoverAnchor(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__/* .Anchor */ .Mz, {
        "data-slot": "popover-anchor",
        ...props
    });
}
function PopoverArrow(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__/* .Arrow */ .i3, {
        "data-slot": "popover-arrow",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('fill-popover', className),
        ...props
    });
}



/***/ }),

/***/ 27063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CG: () => (/* binding */ SheetTrigger),
/* harmony export */   cj: () => (/* binding */ Sheet),
/* harmony export */   h: () => (/* binding */ SheetContent)
/* harmony export */ });
/* unused harmony exports SheetClose, SheetHeader, SheetFooter, SheetTitle, SheetDescription */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89511);
/* harmony import */ var _barrel_optimize_names_XIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65229);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64269);
/* __next_internal_client_entry_do_not_use__ Sheet,SheetTrigger,SheetClose,SheetContent,SheetHeader,SheetFooter,SheetTitle,SheetDescription auto */ 




function Sheet(param) {
    let { onOpenChange, withEvent, ...props } = param;
    const id = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    const onOpenChangeWrapper = (open)=>{
        if (!onOpenChange) return;
        if (open && withEvent) {
            document.dispatchEvent(new CustomEvent('dropdown:open', {
                detail: id
            }));
        }
        onOpenChange(open);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__/* .Root */ .bL, {
        "data-slot": "sheet",
        ...props,
        onOpenChange: onOpenChangeWrapper
    });
}
function SheetTrigger(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__/* .Trigger */ .l9, {
        "data-slot": "sheet-trigger",
        ...props
    });
}
function SheetClose(param) {
    let { ...props } = param;
    return /*#__PURE__*/ _jsx(SheetPrimitive.Close, {
        "data-slot": "sheet-close",
        ...props
    });
}
function SheetPortal(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__/* .Portal */ .ZL, {
        "data-slot": "sheet-portal",
        ...props
    });
}
function SheetOverlay(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__/* .Overlay */ .hJ, {
        "data-slot": "sheet-overlay",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    });
}
function SheetContent(param) {
    let { className, children, side = 'right', ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SheetPortal, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SheetOverlay, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__/* .Content */ .UC, {
                "data-slot": "sheet-content",
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500', side === 'right' && 'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm', side === 'left' && 'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm', side === 'top' && 'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b', side === 'bottom' && 'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t', className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__/* .Close */ .bm, {
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_XIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                                className: "size-4"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                className: "sr-only",
                                children: "Close"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function SheetHeader(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ _jsx("div", {
        "data-slot": "sheet-header",
        className: cn('flex flex-col gap-1.5 p-4', className),
        ...props
    });
}
function SheetFooter(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ _jsx("div", {
        "data-slot": "sheet-footer",
        className: cn('mt-auto flex flex-col gap-2 p-4', className),
        ...props
    });
}
function SheetTitle(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ _jsx(SheetPrimitive.Title, {
        "data-slot": "sheet-title",
        className: cn('text-foreground font-semibold', className),
        ...props
    });
}
function SheetDescription(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ _jsx(SheetPrimitive.Description, {
        "data-slot": "sheet-description",
        className: cn('text-muted-foreground text-sm', className),
        ...props
    });
}



/***/ }),

/***/ 29345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Vg: () => (/* reexport */ ButtonTryOnDesktop),
  vK: () => (/* reexport */ ButtonTryOnDesktopPopoverContent),
  rE: () => (/* reexport */ ButtonTryOnDesktopTrigger)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./src/components/ui/Button/index.tsx
var Button = __webpack_require__(3595);
// EXTERNAL MODULE: ./src/components/ui/popover.tsx
var popover = __webpack_require__(26333);
;// ./src/components/ui/ButtonTryOnDesktop/ButtonTryOnDesktop.tsx




const ButtonTryOnDesktop = /*#__PURE__*/ (0,react.forwardRef)(function ButtonTryOnDesktop(param, ref) {
    let { onClick, side, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(popover/* Popover */.AM, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonTryOnDesktopTrigger, {
                ref: ref,
                ...props
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonTryOnDesktopPopoverContent, {
                side: side
            })
        ]
    });
});
const ButtonTryOnDesktopTrigger = /*#__PURE__*/ (0,react.forwardRef)(function ButtonTryOnDesktop(param, ref) {
    let { children, asChild, ...props } = param;
    const content = asChild && /*#__PURE__*/ (0,react.isValidElement)(children) ? /*#__PURE__*/ (0,react.cloneElement)(children, {
        onClick: undefined,
        ref,
        ...props
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
        ref: ref,
        ...props,
        children: children
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(popover/* PopoverTrigger */.Wv, {
        asChild: true,
        children: content
    });
});
const ButtonTryOnDesktopPopoverContent = (param)=>{
    let { side } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(popover/* PopoverContent */.hl, {
        side: side || 'top',
        className: "w-fit px-2 py-1",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                children: "try on desktop"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(popover/* PopoverArrow */.Rp, {})
        ]
    });
};

;// ./src/components/ui/ButtonTryOnDesktop/index.tsx



/***/ }),

/***/ 44974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* reexport */ InputSimple)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./src/types/index.ts + 2 modules
var types = __webpack_require__(37893);
// EXTERNAL MODULE: ./src/hooks/index.ts + 39 modules
var hooks = __webpack_require__(71203);
// EXTERNAL MODULE: ./src/components/ui/InputSimple/InputSimple.module.scss
var InputSimple_module = __webpack_require__(16500);
var InputSimple_module_default = /*#__PURE__*/__webpack_require__.n(InputSimple_module);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(85203);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react-device-detect/dist/lib.js
var lib = __webpack_require__(92253);
;// ./src/components/ui/InputSimple/InputSimple.tsx
/* __next_internal_client_entry_do_not_use__ InputSimple auto */ 






const InputSimple = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { value, isDisabled, className, onChange, onSubmit, placeholder, maxLength, ...rest } = param;
    const deviceInfo = (0,hooks/* useDeviceDetect */.DL)();
    const isMobileDevice = deviceInfo === null || deviceInfo === void 0 ? void 0 : deviceInfo.isMobile;
    const handleChange = (event)=>{
        if (isDisabled) {
            return;
        }
        onChange(event);
    };
    const handleSubmit = (e)=>{
        if (!onSubmit || isDisabled) {
            return;
        }
        const { key, shiftKey } = e;
        if (key === types/* KeyCodes */.cK.ENTER && !isMobileDevice && !shiftKey) {
            e.preventDefault();
            onSubmit();
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
        type: "text",
        ref: ref,
        maxLength: maxLength,
        disabled: isDisabled,
        placeholder: placeholder,
        value: value,
        onChange: handleChange,
        className: classnames_default()((InputSimple_module_default()).root, lib/* isIOS */.un && (InputSimple_module_default()).iosPatch, className),
        onKeyDown: handleSubmit
    });
});
InputSimple.displayName = 'InputSimple';

;// ./src/components/ui/InputSimple/index.tsx



/***/ }),

/***/ 46767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bc: () => (/* binding */ TooltipProvider),
/* harmony export */   ZI: () => (/* binding */ TooltipContent),
/* harmony export */   k$: () => (/* binding */ TooltipTrigger),
/* harmony export */   m_: () => (/* binding */ Tooltip)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47520);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64269);
/* __next_internal_client_entry_do_not_use__ Tooltip,TooltipTrigger,TooltipContent,TooltipProvider auto */ 



function TooltipProvider(param) {
    let { delayDuration = 0, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_3__/* .Provider */ .Kq, {
        "data-slot": "tooltip-provider",
        delayDuration: delayDuration,
        ...props
    });
}
function Tooltip(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TooltipProvider, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_3__/* .Root */ .bL, {
            "data-slot": "tooltip",
            ...props
        })
    });
}
function TooltipTrigger(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_3__/* .Trigger */ .l9, {
        "data-slot": "tooltip-trigger",
        ...props
    });
}
function TooltipContent(param) {
    let { className, sideOffset = 0, children, hasArrow = true, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_3__/* .Portal */ .ZL, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_3__/* .Content */ .UC, {
            "data-slot": "tooltip-content",
            sideOffset: sideOffset,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance', className),
            ...props,
            children: [
                children,
                hasArrow && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_3__/* .Arrow */ .i3, {
                    className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"
                })
            ]
        })
    });
}



/***/ }),

/***/ 51480:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"dropdown-menu_root__in55Q","dropdownMenuItem":"dropdown-menu_dropdownMenuItem__lMWyW","nj-animate-horizontal-appearance-ltr-enter":"dropdown-menu_nj-animate-horizontal-appearance-ltr-enter__jppLZ","nj-animate-horizontal-appearance-ltr-enter-active":"dropdown-menu_nj-animate-horizontal-appearance-ltr-enter-active__QJZMf","nj-animate-horizontal-appearance-ltr-exit":"dropdown-menu_nj-animate-horizontal-appearance-ltr-exit__XlAn1","nj-animate-horizontal-appearance-ltr-exit-active":"dropdown-menu_nj-animate-horizontal-appearance-ltr-exit-active__pmWty","nj-animate-left-panel-width-reduce-enter":"dropdown-menu_nj-animate-left-panel-width-reduce-enter__0J0_C","nj-animate-left-panel-width-reduce-enter-active":"dropdown-menu_nj-animate-left-panel-width-reduce-enter-active__fF7j_","nj-animate-left-panel-width-reduce-exit":"dropdown-menu_nj-animate-left-panel-width-reduce-exit__19uSq","nj-animate-left-panel-width-reduce-exit-active":"dropdown-menu_nj-animate-left-panel-width-reduce-exit-active__Da3q_","nj-animate-vertical-appearance-appear":"dropdown-menu_nj-animate-vertical-appearance-appear__pkE_9","nj-animate-vertical-appearance-appear-active":"dropdown-menu_nj-animate-vertical-appearance-appear-active__BWn_N","nj-animate-vertical-appearance-enter":"dropdown-menu_nj-animate-vertical-appearance-enter__lZe_T","nj-animate-vertical-appearance-enter-active":"dropdown-menu_nj-animate-vertical-appearance-enter-active__6luCE","nj-animate-vertical-appearance-exit":"dropdown-menu_nj-animate-vertical-appearance-exit__Bk4Oy","nj-animate-vertical-appearance-exit-active":"dropdown-menu_nj-animate-vertical-appearance-exit-active__Sj14w","subContent":"dropdown-menu_subContent___h0Xk","dropdownMenuLabel":"dropdown-menu_dropdownMenuLabel__rq99G","dropdownMenuSeparator":"dropdown-menu_dropdownMenuSeparator__ZiMSv","dropdownMenuShortcut":"dropdown-menu_dropdownMenuShortcut__IFmB3","tooltipWrapper":"dropdown-menu_tooltipWrapper__d_4v5","disabled":"dropdown-menu_disabled__VYhFF","infinite-spinner":"dropdown-menu_infinite-spinner__IRh0j","fadeIn":"dropdown-menu_fadeIn__uKO4L","blinking":"dropdown-menu_blinking__jb3nP","movingRight":"dropdown-menu_movingRight__LaGCi"};

/***/ }),

/***/ 51834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cf: () => (/* binding */ DialogContent),
/* harmony export */   Es: () => (/* binding */ DialogFooter),
/* harmony export */   HM: () => (/* binding */ DialogClose),
/* harmony export */   L3: () => (/* binding */ DialogTitle),
/* harmony export */   c7: () => (/* binding */ DialogHeader),
/* harmony export */   lG: () => (/* binding */ Dialog),
/* harmony export */   rr: () => (/* binding */ DialogDescription),
/* harmony export */   zM: () => (/* binding */ DialogTrigger)
/* harmony export */ });
/* unused harmony exports DialogOverlay, DialogPortal */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89511);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64269);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47615);
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89055);
/* __next_internal_client_entry_do_not_use__ Dialog,DialogClose,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogOverlay,DialogPortal,DialogTitle,DialogTrigger auto */ 





function Dialog(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_4__/* .Root */ .bL, {
        "data-slot": "dialog",
        ...props
    });
}
function DialogTrigger(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_4__/* .Trigger */ .l9, {
        "data-slot": "dialog-trigger",
        ...props
    });
}
function DialogPortal(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_4__/* .Portal */ .ZL, {
        "data-slot": "dialog-portal",
        ...props
    });
}
function DialogClose(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_4__/* .Close */ .bm, {
        "data-slot": "dialog-close",
        ...props
    });
}
function DialogOverlay(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_4__/* .Overlay */ .hJ, {
        "data-slot": "dialog-overlay",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    });
}
function DialogContent(param) {
    let { className, children, hidecloseicon = true, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DialogOverlay, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_4__/* .Content */ .UC, {
                "data-slot": "dialog-content",
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-3xl border py-4 px-6 shadow-lg duration-200', className),
                ...props,
                children: [
                    children,
                    !hidecloseicon && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_4__/* .Close */ .bm, {
                        className: "absolute top-[18px] right-[14px] p-[10px] disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_5__/* .XIcon */ .u, {
                                size: _constants__WEBPACK_IMPORTED_MODULE_3__/* .SVG_SIZE_M */ .ng3
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                className: "sr-only",
                                children: "Close"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function DialogHeader(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        "data-slot": "dialog-header",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('flex flex-col gap-2 pr-4 text-center sm:text-left', className),
        ...props
    });
}
function DialogFooter(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        "data-slot": "dialog-footer",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    });
}
function DialogTitle(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_4__/* .Title */ .hE, {
        "data-slot": "dialog-title",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('text-lg font-semibold py-2 px-0', className, !props.children && 'py-0'),
        ...props
    });
}
function DialogDescription(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_4__/* .Description */ .VY, {
        "data-slot": "dialog-description",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('text-muted-foreground text-sm', className),
        ...props
    });
}



/***/ }),

/***/ 62717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52619);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85203);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94582);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui_TooltipForButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4297);
/* __next_internal_client_entry_do_not_use__ Button auto */ 






const Button = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((param, ref)=>{
    let { as = 'button', href, size = 'medium', shape = 'regular', color = 'primary', className, fullWidth = false, fullWidthWithLeftAlign = false, tooltipContent, tooltipPosition, tooltipAlign, tooltipClassName, children, ...props } = param;
    const colorWithBorder = color === 'primary-outline' || color === 'secondary-outline' || color === 'tertiary-outline' || color === 'tertiary-secondary-outline';
    const commonClassNames = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().root), {
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().primary)]: color === 'primary',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().primaryOutline)]: color === 'primary-outline',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().secondary)]: color === 'secondary',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().secondaryOutline)]: color === 'secondary-outline',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().transparent)]: color === 'transparent',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link)]: color === 'link',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tertiary)]: color === 'tertiary',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tertiaryOutline)]: color === 'tertiary-outline',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tertiarySecondaryOutline)]: color === 'tertiary-secondary-outline',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().highlight)]: color === 'highlight',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().error)]: color === 'error',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().fullWidth)]: fullWidth,
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().fullWidthWithLeftAlign)]: fullWidthWithLeftAlign,
        // next classes are combinations of main properties. To make all buttons with the same sizes and available to rewrite in a simple way
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().roundSmall)]: shape === 'round' && size === 'small',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().regularSmall)]: shape === 'regular' && size === 'small',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().roundMedium)]: shape === 'round' && size === 'medium',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().regularMedium)]: shape === 'regular' && size === 'medium',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().roundSmallWithBorder)]: colorWithBorder && shape === 'round' && size === 'small',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().regularSmallWithBorder)]: colorWithBorder && shape === 'regular' && size === 'small',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().roundMediumWithBorder)]: colorWithBorder && shape === 'round' && size === 'medium',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().regularMediumWithBorder)]: colorWithBorder && shape === 'regular' && size === 'medium'
    }, className);
    const element = (()=>{
        if (as === 'link' && href) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: href,
                className: commonClassNames,
                ref: ref,
                ...props,
                children: children
            });
        }
        if (as === 'a' && href) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                href: href,
                className: commonClassNames,
                ref: ref,
                ...props,
                children: children
            });
        }
        const buttonProps = props;
        var _buttonProps_type;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
            ref: ref,
            className: commonClassNames,
            ...buttonProps,
            type: (_buttonProps_type = buttonProps.type) !== null && _buttonProps_type !== void 0 ? _buttonProps_type : 'button',
            children: children
        });
    })();
    if (!tooltipContent) {
        return element;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_TooltipForButton__WEBPACK_IMPORTED_MODULE_5__/* .TooltipForButton */ .p, {
        tooltipContent: tooltipContent,
        tooltipPosition: tooltipPosition,
        tooltipAlign: tooltipAlign,
        className: tooltipClassName,
        children: element
    });
});
Button.displayName = 'Button';


/***/ }),

/***/ 75664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ useInReactNativeWebView)
/* harmony export */ });
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92253);
/* __next_internal_client_entry_do_not_use__ useInReactNativeWebView auto */ 
const useInReactNativeWebView = function() {
    let includeMobile = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    var _window_ReactNativeWebView, _window;
    const isInReactNativeWebView = !!((_window = window) === null || _window === void 0 ? void 0 : (_window_ReactNativeWebView = _window.ReactNativeWebView) === null || _window_ReactNativeWebView === void 0 ? void 0 : _window_ReactNativeWebView.postMessage);
    if (includeMobile && react_device_detect__WEBPACK_IMPORTED_MODULE_0__/* .isMobile */ .Fr) return true;
    return isInReactNativeWebView;
};


/***/ }),

/***/ 84885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: () => (/* reexport */ SwitchSimple)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(85203);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Check.es.js + 1 modules
var Check_es = __webpack_require__(88702);
// EXTERNAL MODULE: ./src/components/ui/SwitchSimple/SwitchSimple.module.scss
var SwitchSimple_module = __webpack_require__(93978);
var SwitchSimple_module_default = /*#__PURE__*/__webpack_require__.n(SwitchSimple_module);
;// ./src/components/ui/SwitchSimple/SwitchSimple.tsx
/* __next_internal_client_entry_do_not_use__ SwitchSimple auto */ 




const SwitchSimple = (param)=>{
    let { isChecked, onChange, isDisabled = false, Icon = Check_es/* CheckIcon */.S, className } = param;
    const uniqueId = (0,react.useId)();
    const handleChange = (param)=>{
        let { target } = param;
        if (!isDisabled) {
            onChange(target.checked);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classnames_default()((SwitchSimple_module_default()).root, className, {
            [(SwitchSimple_module_default()).switchOn]: isChecked,
            [(SwitchSimple_module_default()).disabled]: isDisabled
        }),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                id: uniqueId,
                checked: isChecked,
                className: (SwitchSimple_module_default()).input,
                type: "checkbox",
                disabled: isDisabled,
                onChange: handleChange
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                htmlFor: uniqueId,
                className: (SwitchSimple_module_default()).label,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    className: (SwitchSimple_module_default()).slider,
                    children: isChecked && /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
                        weight: "bold",
                        size: 14
                    })
                })
            })
        ]
    });
};

;// ./src/components/ui/SwitchSimple/index.ts



/***/ }),

/***/ 93978:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"nj-animate-horizontal-appearance-ltr-enter":"SwitchSimple_nj-animate-horizontal-appearance-ltr-enter__BfRh0","nj-animate-horizontal-appearance-ltr-enter-active":"SwitchSimple_nj-animate-horizontal-appearance-ltr-enter-active__pWAS3","nj-animate-horizontal-appearance-ltr-exit":"SwitchSimple_nj-animate-horizontal-appearance-ltr-exit__FiINR","nj-animate-horizontal-appearance-ltr-exit-active":"SwitchSimple_nj-animate-horizontal-appearance-ltr-exit-active__UogFY","nj-animate-left-panel-width-reduce-enter":"SwitchSimple_nj-animate-left-panel-width-reduce-enter__0t39E","nj-animate-left-panel-width-reduce-enter-active":"SwitchSimple_nj-animate-left-panel-width-reduce-enter-active__lguo1","nj-animate-left-panel-width-reduce-exit":"SwitchSimple_nj-animate-left-panel-width-reduce-exit__MEXj_","nj-animate-left-panel-width-reduce-exit-active":"SwitchSimple_nj-animate-left-panel-width-reduce-exit-active__uusSb","nj-animate-vertical-appearance-appear":"SwitchSimple_nj-animate-vertical-appearance-appear__J21Tj","nj-animate-vertical-appearance-appear-active":"SwitchSimple_nj-animate-vertical-appearance-appear-active__ngqSn","nj-animate-vertical-appearance-enter":"SwitchSimple_nj-animate-vertical-appearance-enter__2N_lH","nj-animate-vertical-appearance-enter-active":"SwitchSimple_nj-animate-vertical-appearance-enter-active__nHtRk","nj-animate-vertical-appearance-exit":"SwitchSimple_nj-animate-vertical-appearance-exit__TI07b","nj-animate-vertical-appearance-exit-active":"SwitchSimple_nj-animate-vertical-appearance-exit-active__tA7va","root":"SwitchSimple_root__VZfbn","switchOn":"SwitchSimple_switchOn___TS5b","slider":"SwitchSimple_slider__5okfj","disabled":"SwitchSimple_disabled__8NMIl","label":"SwitchSimple_label__hU0a_","input":"SwitchSimple_input__ztvvK","infinite-spinner":"SwitchSimple_infinite-spinner__4QfX_","fadeIn":"SwitchSimple_fadeIn__pnar1","blinking":"SwitchSimple_blinking__nFtcC","movingRight":"SwitchSimple_movingRight__TRjH8"};

/***/ }),

/***/ 94438:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"tooltipContent":"TooltipForButton_tooltipContent__zycPm","nj-animate-horizontal-appearance-ltr-enter":"TooltipForButton_nj-animate-horizontal-appearance-ltr-enter__rEPLO","nj-animate-horizontal-appearance-ltr-enter-active":"TooltipForButton_nj-animate-horizontal-appearance-ltr-enter-active__Zkey5","nj-animate-horizontal-appearance-ltr-exit":"TooltipForButton_nj-animate-horizontal-appearance-ltr-exit__U4dlj","nj-animate-horizontal-appearance-ltr-exit-active":"TooltipForButton_nj-animate-horizontal-appearance-ltr-exit-active__uj4l9","nj-animate-left-panel-width-reduce-enter":"TooltipForButton_nj-animate-left-panel-width-reduce-enter__tbU12","nj-animate-left-panel-width-reduce-enter-active":"TooltipForButton_nj-animate-left-panel-width-reduce-enter-active__xwgMO","nj-animate-left-panel-width-reduce-exit":"TooltipForButton_nj-animate-left-panel-width-reduce-exit__g6Ves","nj-animate-left-panel-width-reduce-exit-active":"TooltipForButton_nj-animate-left-panel-width-reduce-exit-active__DxVxt","nj-animate-vertical-appearance-appear":"TooltipForButton_nj-animate-vertical-appearance-appear__f9149","nj-animate-vertical-appearance-appear-active":"TooltipForButton_nj-animate-vertical-appearance-appear-active__02v1A","nj-animate-vertical-appearance-enter":"TooltipForButton_nj-animate-vertical-appearance-enter__yhcmz","nj-animate-vertical-appearance-enter-active":"TooltipForButton_nj-animate-vertical-appearance-enter-active__6zMY1","nj-animate-vertical-appearance-exit":"TooltipForButton_nj-animate-vertical-appearance-exit__jjJVr","nj-animate-vertical-appearance-exit-active":"TooltipForButton_nj-animate-vertical-appearance-exit-active__vNwuc","tooltipArrow":"TooltipForButton_tooltipArrow__yUVLM","infinite-spinner":"TooltipForButton_infinite-spinner__K7Tto","fadeIn":"TooltipForButton_fadeIn__jSQ7U","blinking":"TooltipForButton_blinking__udfyN","movingRight":"TooltipForButton_movingRight__ePQ24"};

/***/ }),

/***/ 94582:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"Button_root__GbzzH","nj-animate-horizontal-appearance-ltr-enter":"Button_nj-animate-horizontal-appearance-ltr-enter__k4_1z","nj-animate-horizontal-appearance-ltr-enter-active":"Button_nj-animate-horizontal-appearance-ltr-enter-active__NQSTm","nj-animate-horizontal-appearance-ltr-exit":"Button_nj-animate-horizontal-appearance-ltr-exit__VdlbF","nj-animate-horizontal-appearance-ltr-exit-active":"Button_nj-animate-horizontal-appearance-ltr-exit-active__a9mbG","nj-animate-left-panel-width-reduce-enter":"Button_nj-animate-left-panel-width-reduce-enter__lCuZJ","nj-animate-left-panel-width-reduce-enter-active":"Button_nj-animate-left-panel-width-reduce-enter-active__QRBYN","nj-animate-left-panel-width-reduce-exit":"Button_nj-animate-left-panel-width-reduce-exit__sUmnB","nj-animate-left-panel-width-reduce-exit-active":"Button_nj-animate-left-panel-width-reduce-exit-active__1hSHQ","nj-animate-vertical-appearance-appear":"Button_nj-animate-vertical-appearance-appear__NHuAv","nj-animate-vertical-appearance-appear-active":"Button_nj-animate-vertical-appearance-appear-active__7gzAi","nj-animate-vertical-appearance-enter":"Button_nj-animate-vertical-appearance-enter__iixTI","nj-animate-vertical-appearance-enter-active":"Button_nj-animate-vertical-appearance-enter-active__dB6V5","nj-animate-vertical-appearance-exit":"Button_nj-animate-vertical-appearance-exit__BKbzW","nj-animate-vertical-appearance-exit-active":"Button_nj-animate-vertical-appearance-exit-active__6xFwm","roundSmall":"Button_roundSmall__Od2zS","roundMedium":"Button_roundMedium__dXNSN","regularSmall":"Button_regularSmall__deOE4","regularMedium":"Button_regularMedium__yeDDR","roundSmallWithBorder":"Button_roundSmallWithBorder___Q51w","regularSmallWithBorder":"Button_regularSmallWithBorder__5dzEh","roundMediumWithBorder":"Button_roundMediumWithBorder__pYqHR","regularMediumWithBorder":"Button_regularMediumWithBorder__iTnq_","primary":"Button_primary__swzAa","primaryOutline":"Button_primaryOutline__SPQdj","secondary":"Button_secondary__pFIlL","secondaryOutline":"Button_secondaryOutline__5jPZ9","highlight":"Button_highlight__vLSnB","tertiary":"Button_tertiary__3PK3l","tertiaryOutline":"Button_tertiaryOutline__gImeh","tertiarySecondaryOutline":"Button_tertiarySecondaryOutline__yv6Ir","transparent":"Button_transparent__BDNtP","error":"Button_error__irxwf","link":"Button_link__bm5JO","fullWidth":"Button_fullWidth__EcevO","fullWidthWithLeftAlign":"Button_fullWidthWithLeftAlign__LNqy6","infinite-spinner":"Button_infinite-spinner__UNOrs","fadeIn":"Button_fadeIn__uTLUV","blinking":"Button_blinking__mZFIH","movingRight":"Button_movingRight__9Mij_"};

/***/ })

}]);
//# sourceMappingURL=972-d582dfb4c4caa55a.js.map