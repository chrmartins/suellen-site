module.exports = [
"[project]/src/lib/siteConfig.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CRP",
    ()=>CRP,
    "EMAIL",
    ()=>EMAIL,
    "SITE_DESCRIPTION",
    ()=>SITE_DESCRIPTION,
    "SITE_NAME",
    ()=>SITE_NAME,
    "SITE_URL",
    ()=>SITE_URL,
    "WHATSAPP_HREF",
    ()=>WHATSAPP_HREF,
    "WHATSAPP_NUMBER",
    ()=>WHATSAPP_NUMBER
]);
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://suellenrodrigues.com.br";
const SITE_NAME = "Suellen Rodrigues | Psicóloga Clínica";
const SITE_DESCRIPTION = "Um espaço seguro para o seu cuidado emocional. Escuta genuína, atendimento humanizado e acompanhamento individualizado para adultos. CRP 05/85974.";
const WHATSAPP_NUMBER = "5521971331197";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}`;
const EMAIL = "psicologasuellenrodrigues05@gmail.com";
const CRP = "CRP 05/85974";
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/siteConfig.ts [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    metadataBase: new URL(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_URL"]),
    title: {
        default: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"],
        template: `%s | Suellen Rodrigues Psicóloga`
    },
    description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_DESCRIPTION"],
    keywords: [
        "psicóloga",
        "psicóloga clínica",
        "psicologia clínica",
        "terapia individual",
        "atendimento psicológico online",
        "saúde mental",
        "ansiedade",
        "depressão",
        "Suellen Rodrigues",
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CRP"]
    ],
    alternates: {
        canonical: "/"
    },
    openGraph: {
        title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"],
        description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_DESCRIPTION"],
        url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_URL"],
        siteName: "Suellen Rodrigues Psicóloga",
        locale: "pt_BR",
        type: "website"
    },
    authors: [
        {
            name: "Suellen Rodrigues",
            url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_URL"]
        }
    ],
    creator: "Suellen Rodrigues",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large"
        }
    },
    // Referenciadas para uso interno — evita import não utilizado
    other: {
        "contact:email": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EMAIL"],
        "contact:whatsapp": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WHATSAPP_HREF"]
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "pt-BR",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            suppressHydrationWarning: true,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_0i8v4ke._.js.map