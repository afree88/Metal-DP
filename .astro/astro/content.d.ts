declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"produtos": {
"adega-parede-ferro-artesanal.md": {
	id: "adega-parede-ferro-artesanal.md";
  slug: "adega-parede-ferro-artesanal";
  body: string;
  collection: "produtos";
  data: InferEntrySchema<"produtos">
} & { render(): Render[".md"] };
"aparador-serralheria-geometrico.md": {
	id: "aparador-serralheria-geometrico.md";
  slug: "aparador-serralheria-geometrico";
  body: string;
  collection: "produtos";
  data: InferEntrySchema<"produtos">
} & { render(): Render[".md"] };
"arandela-parede-folhagem.md": {
	id: "arandela-parede-folhagem.md";
  slug: "arandela-parede-folhagem";
  body: string;
  collection: "produtos";
  data: InferEntrySchema<"produtos">
} & { render(): Render[".md"] };
"corrimao-espiral-barroco.md": {
	id: "corrimao-espiral-barroco.md";
  slug: "corrimao-espiral-barroco";
  body: string;
  collection: "produtos";
  data: InferEntrySchema<"produtos">
} & { render(): Render[".md"] };
"escultura-arvore-da-vida-ferro.md": {
	id: "escultura-arvore-da-vida-ferro.md";
  slug: "escultura-arvore-da-vida-ferro";
  body: string;
  collection: "produtos";
  data: InferEntrySchema<"produtos">
} & { render(): Render[".md"] };
"grade-sacada-ornamental.md": {
	id: "grade-sacada-ornamental.md";
  slug: "grade-sacada-ornamental";
  body: string;
  collection: "produtos";
  data: InferEntrySchema<"produtos">
} & { render(): Render[".md"] };
"guarda-corpo-art-nouveau.md": {
	id: "guarda-corpo-art-nouveau.md";
  slug: "guarda-corpo-art-nouveau";
  body: string;
  collection: "produtos";
  data: InferEntrySchema<"produtos">
} & { render(): Render[".md"] };
"lustre-pendente-medieval-forjado.md": {
	id: "lustre-pendente-medieval-forjado.md";
  slug: "lustre-pendente-medieval-forjado";
  body: string;
  collection: "produtos";
  data: InferEntrySchema<"produtos">
} & { render(): Render[".md"] };
"mesa-centro-industrial-ferro-madeira.md": {
	id: "mesa-centro-industrial-ferro-madeira.md";
  slug: "mesa-centro-industrial-ferro-madeira";
  body: string;
  collection: "produtos";
  data: InferEntrySchema<"produtos">
} & { render(): Render[".md"] };
"painel-metalico-geometrico-laser.md": {
	id: "painel-metalico-geometrico-laser.md";
  slug: "painel-metalico-geometrico-laser";
  body: string;
  collection: "produtos";
  data: InferEntrySchema<"produtos">
} & { render(): Render[".md"] };
"pergolado-ferro-ornamental.md": {
	id: "pergolado-ferro-ornamental.md";
  slug: "pergolado-ferro-ornamental";
  body: string;
  collection: "produtos";
  data: InferEntrySchema<"produtos">
} & { render(): Render[".md"] };
"portao-colonial-forjado.md": {
	id: "portao-colonial-forjado.md";
  slug: "portao-colonial-forjado";
  body: string;
  collection: "produtos";
  data: InferEntrySchema<"produtos">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"configuracoes": {
"loja": {
	id: "loja";
  collection: "configuracoes";
  data: InferEntrySchema<"configuracoes">
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
