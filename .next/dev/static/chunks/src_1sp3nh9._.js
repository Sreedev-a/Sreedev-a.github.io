(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/AvatarGreeting.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AvatarGreeting",
    ()=>AvatarGreeting
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const avatarPath = "/avatar/sreedev-avatar.png";
function AvatarGreeting() {
    _s();
    const [imageFailed, setImageFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "avatar-greeting",
        "aria-label": "Sreedev A says hello",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "avatar-frame",
                children: [
                    !imageFailed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: avatarPath,
                        alt: "Sreedev A",
                        fill: true,
                        sizes: "(max-width: 800px) 54px, 70px",
                        priority: true,
                        onError: ()=>setImageFailed(true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/AvatarGreeting.tsx",
                        lineNumber: 13,
                        columnNumber: 24
                    }, this),
                    imageFailed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "avatar-initials",
                        "aria-label": "Sreedev A",
                        children: "SA"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AvatarGreeting.tsx",
                        lineNumber: 14,
                        columnNumber: 23
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "avatar-status",
                        "aria-label": "Available"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AvatarGreeting.tsx",
                        lineNumber: 15,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AvatarGreeting.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "avatar-bubble",
                children: [
                    "Hi, I'm Sreedev ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: "👋"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AvatarGreeting.tsx",
                        lineNumber: 17,
                        columnNumber: 57
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AvatarGreeting.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AvatarGreeting.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
_s(AvatarGreeting, "J/DE58sO7UnFuUylWstCz93Av2c=");
_c = AvatarGreeting;
var _c;
__turbopack_context__.k.register(_c, "AvatarGreeting");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/GlassLighting.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlassLighting",
    ()=>GlassLighting
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function GlassLighting() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlassLighting.useEffect": ()=>{
            const precisePointer = matchMedia("(hover: hover) and (pointer: fine)");
            const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
            if (!precisePointer.matches || reducedMotion.matches) return;
            let frame = 0;
            const move = {
                "GlassLighting.useEffect.move": (event)=>{
                    cancelAnimationFrame(frame);
                    frame = requestAnimationFrame({
                        "GlassLighting.useEffect.move": ()=>{
                            document.querySelectorAll(".glass, .nav-wrap.scrolled").forEach({
                                "GlassLighting.useEffect.move": (element)=>{
                                    const bounds = element.getBoundingClientRect();
                                    const near = event.clientX >= bounds.left - 140 && event.clientX <= bounds.right + 140 && event.clientY >= bounds.top - 140 && event.clientY <= bounds.bottom + 140;
                                    element.style.setProperty("--light-x", `${event.clientX - bounds.left}px`);
                                    element.style.setProperty("--light-y", `${event.clientY - bounds.top}px`);
                                    element.style.setProperty("--light-opacity", near ? "1" : "0");
                                }
                            }["GlassLighting.useEffect.move"]);
                        }
                    }["GlassLighting.useEffect.move"]);
                }
            }["GlassLighting.useEffect.move"];
            addEventListener("pointermove", move, {
                passive: true
            });
            return ({
                "GlassLighting.useEffect": ()=>{
                    removeEventListener("pointermove", move);
                    cancelAnimationFrame(frame);
                }
            })["GlassLighting.useEffect"];
        }
    }["GlassLighting.useEffect"], []);
    return null;
}
_s(GlassLighting, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = GlassLighting;
var _c;
__turbopack_context__.k.register(_c, "GlassLighting");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolio.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Navbar() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const on = {
                "Navbar.useEffect.on": ()=>setScrolled(scrollY > 20)
            }["Navbar.useEffect.on"];
            on();
            addEventListener("scroll", on, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>removeEventListener("scroll", on)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `nav-wrap ${scrolled ? "scrolled" : ""}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            "aria-label": "Main navigation",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "wordmark",
                    href: "#home",
                    children: [
                        "Sreedev A",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 8,
                            columnNumber: 146
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 8,
                    columnNumber: 100
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `nav-links ${open ? "open" : ""}`,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["portfolio"].nav.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `#${n.toLowerCase()}`,
                            onClick: ()=>setOpen(false),
                            children: n
                        }, n, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 8,
                            columnNumber: 225
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 8,
                    columnNumber: 164
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "nav-actions",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["portfolio"].socials.github,
                            target: "_blank",
                            "aria-label": "GitHub",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 8,
                                columnNumber: 401
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 8,
                            columnNumber: 338
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["portfolio"].socials.linkedin,
                            target: "_blank",
                            "aria-label": "LinkedIn",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 8,
                                columnNumber: 491
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 8,
                            columnNumber: 424
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "resume-mini",
                            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["portfolio"].socials.resume,
                            target: "_blank",
                            children: "Resume"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 8,
                            columnNumber: 516
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "menu",
                            onClick: ()=>setOpen(!open),
                            "aria-label": "Toggle menu",
                            "aria-expanded": open,
                            children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 8,
                                columnNumber: 699
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {}, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 8,
                                columnNumber: 704
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 8,
                            columnNumber: 593
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 8,
                    columnNumber: 309
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 8,
            columnNumber: 66
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
_s(Navbar, "WyVpm2XzeazQ2+HREDIUNzXvW0M=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProjectMedia.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectMedia",
    ()=>ProjectMedia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as ImageIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ProjectMedia({ src, alt, category, variant = "standard", priority = false, number }) {
    _s();
    const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `project-visual project-visual-${variant}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: number
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectMedia.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "project-media-frame",
                children: [
                    !failed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: src,
                        alt: alt,
                        fill: true,
                        sizes: priority ? "(max-width: 800px) 100vw, 48vw" : "(max-width: 800px) 100vw, 45vw",
                        priority: priority,
                        onError: ()=>setFailed(true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectMedia.tsx",
                        lineNumber: 13,
                        columnNumber: 18
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "project-media-fallback",
                        role: "img",
                        "aria-label": `${alt} image placeholder`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/ProjectMedia.tsx",
                                lineNumber: 13,
                                columnNumber: 285
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "Project preview"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectMedia.tsx",
                                lineNumber: 13,
                                columnNumber: 297
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectMedia.tsx",
                        lineNumber: 13,
                        columnNumber: 194
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "project-media-shade"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectMedia.tsx",
                        lineNumber: 14,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "project-media-meta",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: category
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectMedia.tsx",
                            lineNumber: 15,
                            columnNumber: 43
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectMedia.tsx",
                        lineNumber: 15,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectMedia.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProjectMedia.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_s(ProjectMedia, "BFa/7w0IiJnSoWJxZHxuU4kOwF4=");
_c = ProjectMedia;
var _c;
__turbopack_context__.k.register(_c, "ProjectMedia");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/portfolio.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "portfolio",
    ()=>portfolio
]);
const portfolio = {
    person: {
        name: "Sreedev A",
        role: "AI/ML Engineer",
        location: "Bengaluru, India",
        email: "sreedev514162@gmail.com",
        summary: "I build intelligent systems that combine machine learning, computer vision, automation and modern software engineering."
    },
    socials: {
        github: "https://github.com/Sreedev-a",
        linkedin: "https://www.linkedin.com/in/sreedev514162/",
        resume: "/resume/Sreedev_A_Resume.pdf"
    },
    nav: [
        "Home",
        "About",
        "Experience",
        "Projects",
        "Skills",
        "Contact"
    ],
    experience: [
        {
            role: "AI/ML Engineer",
            company: "Meetmux",
            period: "January 2026 – Present",
            points: [
                "Developing AI/ML solutions and end-to-end machine-learning workflows.",
                "Integrating models into real-world applications and AI-powered product prototypes.",
                "Building with Python and modern AI technologies."
            ]
        },
        {
            role: "Machine Learning Intern",
            company: "Feyn Labs",
            period: "October 2024 – March 2025",
            points: [
                "Built Matchify, an NLP clustering project focused on market segmentation.",
                "Applied K-Means, KNN and PCA to machine-learning experiments.",
                "Developed AI product prototypes and explored time-series and finance use cases."
            ]
        },
        {
            role: "AI & ML Intern",
            company: "Aerobosoft",
            period: "August 2023 – October 2023",
            points: [
                "Developed a kyphosis detection workflow using SVM, Random Forest and XGBoost.",
                "Prepared data pipelines and contributed to an NLP chatbot.",
                "Explored reinforcement-learning-based improvements."
            ]
        }
    ],
    projects: [
        {
            title: "AI-Proctored Assessment Platform",
            category: "AI • Computer Vision • Full Stack",
            description: "An intelligent assessment platform with adaptive questions, webcam proctoring, device and multiple-person detection, look-away monitoring, evidence capture, risk scoring, timed tests, and dedicated candidate and admin experiences.",
            tech: [
                "Next.js",
                "TypeScript",
                "FastAPI",
                "Python",
                "OpenCV"
            ],
            image: "/ai-proctoring-cover.png",
            github: "",
            demo: ""
        },
        {
            title: "Cardiovascular Disease Detection from Retinal Images",
            category: "Deep Learning • Computer Vision",
            description: "CNN-based system for classifying cardiovascular disease indicators from retinal fundus images, covering preprocessing, training and performance evaluation.",
            tech: [
                "Python",
                "TensorFlow",
                "Keras",
                "OpenCV",
                "CNN"
            ],
            image: "/retinal-diagnostics-cover.png",
            github: "",
            demo: ""
        },
        {
            title: "Real-Time Hand Gesture Recognition",
            category: "Computer Vision",
            description: "Real-time webcam gesture recognition using hand landmarks and machine-learning and deep-learning techniques.",
            tech: [
                "Python",
                "OpenCV",
                "MediaPipe",
                "TensorFlow"
            ],
            image: "/hand-gesture-cover.png",
            github: "",
            demo: ""
        },
        {
            title: "Attendance Register ERP",
            category: "Android • Firebase",
            description: "Android attendance management system with authentication, role-based access and real-time database integration.",
            tech: [
                "Android Studio",
                "Java / Kotlin",
                "XML",
                "Firebase"
            ],
            image: "/attendance-erp-cover.png",
            github: "",
            demo: ""
        }
    ],
    skills: {
        "Languages": [
            "Python",
            "Java",
            "SQL",
            "C"
        ],
        "AI / Machine Learning": [
            "TensorFlow",
            "Keras",
            "scikit-learn",
            "CNN",
            "NLP",
            "SVM",
            "Random Forest",
            "XGBoost",
            "K-Means",
            "KNN",
            "PCA"
        ],
        "Computer Vision": [
            "OpenCV",
            "MediaPipe"
        ],
        "Data": [
            "NumPy",
            "Pandas",
            "Matplotlib",
            "SciPy"
        ],
        "Backend / Web": [
            "FastAPI",
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS"
        ],
        "Developer Tools": [
            "Git",
            "GitHub",
            "VS Code",
            "Jupyter",
            "Docker"
        ]
    },
    interests: [
        {
            title: "Generative AI",
            text: "Building practical applications using modern language models."
        },
        {
            title: "Computer Vision",
            text: "Creating real-time intelligent visual systems."
        },
        {
            title: "AI Agents & Automation",
            text: "Combining AI models with tools and workflows."
        },
        {
            title: "MLOps",
            text: "Turning machine-learning experiments into reliable products."
        }
    ],
    education: {
        degree: "B.Tech — Artificial Intelligence & Machine Learning",
        year: "2024",
        institution: "Institution name — add in src/data/portfolio.ts"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1sp3nh9._.js.map