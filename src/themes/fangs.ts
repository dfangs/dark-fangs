import { Theme } from "../types.js";
import { GITHUB_DARK } from "./github.js";
import chroma from "chroma-js";

const PALETTE = {
	red: chroma("#e06c75"),
	green: chroma("#abc185"),
	blue: chroma("#9ecbff"),
	yellow: chroma("#fabf84"),
	violet: chroma("#d2a8ff"),
	lightGrey: chroma("#cccccc"),
	darkGrey: chroma("#666d7a"),
} as const;

/**
 * Dark Fangs theme
 */
export const DARK_FANGS: Theme = {
	$schema: "vscode://schemas/color-theme",
	type: "dark",
	name: "Dark Fangs",
	colors: {
		...GITHUB_DARK.colors,
		...{
			// Self fine-tune
			"editor.findMatchHighlightBackground": chroma("#ffd33d33"),
			"editor.selectionBackground": chroma("#3392ff40"),
			"editor.selectionHighlightBorder": undefined,
			"editor.wordHighlightBackground": chroma("#636e7b80"),
			"editor.wordHighlightBorder": chroma("#636e7b99"),
			"editor.wordHighlightStrongBackground": chroma("#636e7b4d"),
			"editor.wordHighlightStrongBorder": chroma("#636e7b99"),
			// Use the VS Code default (10)
			"gitDecoration.addedResourceForeground": chroma("#81b88b"),
			"gitDecoration.conflictingResourceForeground": chroma("#e4676b"),
			"gitDecoration.deletedResourceForeground": chroma("#c74e39"),
			"gitDecoration.ignoredResourceForeground": chroma("#8c8c8c"),
			"gitDecoration.modifiedResourceForeground": chroma("#e2c08d"),
			"gitDecoration.renamedResourceForeground": chroma("#73c991"),
			"gitDecoration.stageDeletedResourceForeground": chroma("#c74e39"),
			"gitDecoration.stageModifiedResourceForeground": chroma("#e2c08d"),
			"gitDecoration.submoduleResourceForeground": chroma("#8db9e2"),
			"gitDecoration.untrackedResourceForeground": chroma("#73c991"),
		},
	},
	tokenColors: [
		{
			name: "Function declarations",
			scope: [
				"entity.name.function",
				"support.function",
				"support.constant.handlebars",
				"source.powershell variable.other.member",
				"entity.name.operator.custom-literal",
			],
			settings: {
				foreground: PALETTE.yellow,
			},
		},
		{
			name: "Reserved language variables like this, super, self, etc.",
			scope: [
				"variable.language", // Note: This somehow doesn't apply to Python's `self` keyword :(
			],
			settings: {
				foreground: PALETTE.blue,
				fontStyle: "italic",
			},
		},
		{
			name: "Constants and enums",
			scope: [
				"constant.language",
				"constant.numeric",
				"variable.other.constant",
				"variable.other.enummember",
				"support.constant",
			],
			settings: {
				foreground: PALETTE.blue,
			},
		},
		{
			name: "Function parameters and framework variables",
			scope: ["variable.parameter", "support.variable"],
			settings: {
				foreground: PALETTE.lightGrey,
				fontStyle: "italic",
			},
		},
		{
			name: "Other variables (e.g. local variables)",
			scope: [
				"variable.other",
				"meta.definition.variable.name",
				"entity.name.variable",
				"constant.other.placeholder",
			],
			settings: {
				foreground: PALETTE.lightGrey,
			},
		},
		{
			name: "Types declaration and references",
			scope: [
				"support.class",
				"support.type",
				"entity.name.type",
				"entity.name.namespace",
				"entity.other.attribute",
				"entity.name.scope-resolution",
				"entity.name.class",
			],
			settings: {
				foreground: chroma("#DDBBFF"),
			},
		},
		{
			name: "Storage modifiers",
			scope: [
				"storage.type.class",
				"storage.type.function",
				"storage.modifier",
				"storage.type",
			],
			settings: {
				foreground: PALETTE.red,
				fontStyle: "italic",
			},
		},
		{
			name: "Import statements",
			scope: ["storage.modifier.import"],
			settings: {
				foreground: PALETTE.yellow,
				fontStyle: "italic",
			},
		},
		{
			name: "Control flow and special keywords",
			scope: [
				"keyword.control",
				"keyword.operator.logical",
				"source.cpp keyword.operator.new",
				"keyword.operator.delete",
				"keyword.other.using",
				"keyword.other.operator",
				"entity.name.operator",
				"keyword.codetag", // This applies to "TODO" in comments
				"keyword.other", // Moved from below
			],
			settings: {
				foreground: PALETTE.red,
				fontStyle: "italic",
			},
		},
		{
			name: "Operators", // Changed from: "Operators and other keywords"
			scope: ["keyword.operator"],
			settings: {
				foreground: PALETTE.red,
			},
		},
		{
			name: "Comments",
			scope: ["comment", "punctuation.definition.comment"],
			settings: {
				foreground: PALETTE.darkGrey,
				fontStyle: "italic",
			},
		},
		{
			name: "All strings",
			scope: ["string"],
			settings: {
				foreground: PALETTE.green,
			},
		},
		{
			scope: ["support.type.property-name"],
			settings: {
				foreground: PALETTE.red,
			},
		},
		// {
		// 	scope: ["constant.other.reference.link", "string.other.link"],
		// 	settings: {
		// 		foreground: chroma("#97aa78"),
		// 		fontStyle: "underline",
		// 	},
		// },
		// {
		// 	scope: ["entity.other.attribute-name", "markup.underline.link", "string.url"],
		// 	settings: {
		// 		fontStyle: "italic",
		// 	},
		// },
		{
			name: "Regular expression groups",
			scope: [
				"punctuation.definition.group.regexp",
				"punctuation.definition.group.assertion.regexp",
				"punctuation.definition.character-class.regexp",
				"punctuation.character.set.begin.regexp",
				"punctuation.character.set.end.regexp",
				"keyword.operator.negation.regexp",
				"support.other.parenthesis.regexp",
			],
			settings: {
				foreground: chroma("#CE9178"), // Or #98C379
			},
		},
		{
			name: "Decorators",
			scope: "punctuation.decorator",
			settings: {
				foreground: PALETTE.violet,
			},
		},
		{
			name: "YAML property names",
			scope: "entity.name.tag",
			settings: {
				foreground: PALETTE.red,
			},
		},
		{
			scope: [
				"constant.character.character-class.regexp",
				"constant.other.character-class.set.regexp",
				"constant.other.character-class.regexp",
				"constant.character.set.regexp",
			],
			settings: {
				foreground: chroma("#d16969"),
			},
		},
		{
			scope: ["keyword.operator.or.regexp", "keyword.control.anchor.regexp"],
			settings: {
				foreground: chroma("#DCDCAA"),
			},
		},
		{
			scope: "keyword.operator.quantifier.regexp",
			settings: {
				foreground: chroma("#d7ba7d"),
			},
		},
		{
			scope: ["markup.heading", "markup.heading entity.name"],
			settings: {
				foreground: PALETTE.red,
				fontStyle: "bold",
			},
		},
		{
			scope: "markup.quote",
			settings: {
				foreground: chroma("#98C379"),
			},
		},
		{
			scope: "markup.italic",
			settings: {
				foreground: PALETTE.lightGrey,
				fontStyle: "italic",
			},
		},
		{
			scope: "markup.bold",
			settings: {
				foreground: PALETTE.lightGrey,
				fontStyle: "bold",
			},
		},
		{
			scope: ["markup.underline"],
			settings: {
				fontStyle: "underline",
			},
		},
		{
			scope: ["markup.strikethrough"],
			settings: {
				fontStyle: "strikethrough",
			},
		},
		{
			scope: "markup.inline.raw",
			settings: {
				foreground: chroma("#97aa78"),
			},
		},
		{
			scope: [
				"markup.deleted",
				"meta.diff.header.from-file",
				"punctuation.definition.deleted",
			],
			settings: {
				foreground: chroma("#FFA198"),
			},
		},
		{
			scope: [
				"markup.inserted",
				"meta.diff.header.to-file",
				"punctuation.definition.inserted",
			],
			settings: {
				foreground: chroma("#98C379"),
			},
		},
		{
			scope: ["markup.changed", "punctuation.definition.changed"],
			settings: {
				foreground: PALETTE.yellow,
			},
		},
		{
			scope: ["markup.ignored", "markup.untracked"],
			settings: {
				foreground: chroma("#161B22"),
			},
		},
		{
			// Adapted from One Dark Pro Monokai Darker
			scope: [
				"punctuation.definition.bold.markdown",
				"punctuation.definition.italic.markdown",
				"punctuation.definition.heading.markdown",
			],
			settings: {
				foreground: chroma("#696969"),
			},
		},
		{
			scope: "punctuation.definition.list.begin.markdown",
			settings: {
				foreground: PALETTE.yellow,
			},
		},
		{
			scope: ["punctuation.section.embedded"],
			settings: {
				foreground: PALETTE.red,
			},
		},
		{
			scope: [
				"meta.jsx.children",
				"meta.block",
				"meta.tag.attributes",
				"entity.name.constant",
				"meta.object.member",
				"meta.embedded.expression",
			],
			settings: {
				foreground: PALETTE.lightGrey,
			},
		},
		{
			scope: ["meta.property-name", "meta.module-reference", "meta.output"],
			settings: {
				foreground: chroma("#97aa78"),
			},
		},
		{
			scope: "meta.diff.range",
			settings: {
				foreground: chroma("#DDBBFF"),
				fontStyle: "bold",
			},
		},
		{
			scope: "meta.diff.header",
			settings: {
				foreground: chroma("#97aa78"),
			},
		},
		{
			scope: "meta.separator",
			settings: {
				foreground: chroma("#97aa78"),
				fontStyle: "bold",
			},
		},
		{
			name: "Invalid tokens",
			scope: [
				"invalid.broken",
				"invalid.deprecated",
				"invalid.illegal",
				"invalid.unimplemented",
			],
			settings: {
				foreground: chroma("#FFA198"),
				fontStyle: "italic",
			},
		},
		{
			scope: [
				"brackethighlighter.tag",
				"brackethighlighter.curly",
				"brackethighlighter.round",
				"brackethighlighter.square",
				"brackethighlighter.angle",
				"brackethighlighter.quote",
			],
			settings: {
				foreground: PALETTE.darkGrey,
			},
		},
		{
			scope: "brackethighlighter.unmatched",
			settings: {
				foreground: chroma("#FFA198"),
			},
		},
		{
			scope: "carriage-return",
			settings: {
				foreground: chroma("#F0F6FC"),
				fontStyle: "italic underline",
			},
		},
		{
			scope: "message.error",
			settings: {
				foreground: chroma("#FFA198"),
			},
		},
		{
			scope: "token.info-token",
			settings: {
				foreground: chroma("#6796E6"),
			},
		},
		{
			scope: "token.warn-token",
			settings: {
				foreground: chroma("#CD9731"),
			},
		},
		{
			scope: "token.error-token",
			settings: {
				foreground: chroma("#F44747"),
			},
		},
		{
			scope: "token.debug-token",
			settings: {
				foreground: chroma("#B267E6"),
			},
		},
	],
	semanticHighlighting: true,
	semanticTokenColors: {
		namespace: PALETTE.blue,
		class: PALETTE.violet,
		enum: PALETTE.violet,
		interface: PALETTE.violet,
		struct: PALETTE.violet,
		typeParameter: PALETTE.violet,
		type: PALETTE.violet,
		parameter: PALETTE.lightGrey,
		variable: PALETTE.lightGrey,
		property: PALETTE.lightGrey,
		enumMember: PALETTE.blue,
		decorator: PALETTE.yellow,
		event: PALETTE.lightGrey,
		function: PALETTE.yellow,
		method: PALETTE.yellow,
		macro: PALETTE.red,
		label: PALETTE.red,
		comment: PALETTE.darkGrey,
		string: PALETTE.green,
		keyword: PALETTE.red,
		number: PALETTE.blue,
		regexp: PALETTE.green,
		operator: PALETTE.red,
		// "selfParameter": PALETTE.blue  // I don't like this :(
	},
};
