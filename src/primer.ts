import chroma from "chroma-js";

// Default to using 10-color scales
const COLOR_SCALE_LENGTH = 10;

// Helper type for n-length tuple
// Reference: https://stackoverflow.com/a/65914848
type Tuple<T, N extends number, A extends Array<T> = []> = A extends { length: N }
	? A
	: Tuple<T, N, [...A, T]>;

// Type aliases
type ColorRange = Tuple<chroma.Color, 2>;
type ColorScale = Tuple<chroma.Color, typeof COLOR_SCALE_LENGTH>;

/**
 * Arguments to `Primer.fromScale` factory method
 */
interface PrimerScaleArgs {
	black: chroma.Color;
	white: chroma.Color;
	gray: ColorScale;
	blue: ColorScale;
	green: ColorScale;
	yellow: ColorScale;
	orange: ColorScale;
	red: ColorScale;
	purple: ColorScale;
	pink: ColorScale;
}

/**
 * Arguments to `Primer.fromRange` factory method.
 */
interface PrimerRangeArgs {
	black: chroma.Color;
	white: chroma.Color;
	gray: ColorRange;
	blue: ColorRange;
	green: ColorRange;
	yellow: ColorRange;
	orange: ColorRange;
	red: ColorRange;
	purple: ColorRange;
	pink: ColorRange;
}

/**
 * Represents a color primer.
 */
export class Primer {
	constructor(
		public readonly black: chroma.Color,
		public readonly white: chroma.Color,
		public readonly gray: ColorScale,
		public readonly blue: ColorScale,
		public readonly green: ColorScale,
		public readonly yellow: ColorScale,
		public readonly orange: ColorScale,
		public readonly red: ColorScale,
		public readonly purple: ColorScale,
		public readonly pink: ColorScale,
	) {}

	/**
	 * Creates a color primer based on the given color scales.
	 *
	 * @param args primer arguments
	 * @returns primer
	 */
	public static fromScale(args: PrimerScaleArgs): Primer {
		return new Primer(
			args.black,
			args.white,
			args.gray,
			args.blue,
			args.green,
			args.yellow,
			args.orange,
			args.red,
			args.purple,
			args.pink,
		);
	}

	/**
	 * Creates a color primer based on color ranges instead of color scales.
	 *
	 * Note:
	 * This is an experimental attempt at programmatically generating
	 * the theme color palette, but so far this has not worked well.
	 *
	 * @param args primer arguments
	 * @returns primer
	 */
	public static fromRange(args: PrimerRangeArgs): Primer {
		return new Primer(
			args.black,
			args.white,
			generateColorScale(args.gray),
			generateColorScale(args.blue),
			generateColorScale(args.green),
			generateColorScale(args.yellow),
			generateColorScale(args.orange),
			generateColorScale(args.red),
			generateColorScale(args.purple),
			generateColorScale(args.pink),
		);
	}

	/**
	 * Reverses the color scheme of this primer between dark <-> light.
	 *
	 * @returns reversed primer
	 */
	public reverse(): Primer {
		function reverseScale(scale: ColorScale): ColorScale {
			return [...scale].reverse() as ColorScale;
		}

		return new Primer(
			this.white,
			this.black,
			reverseScale(this.gray),
			reverseScale(this.blue),
			reverseScale(this.green),
			reverseScale(this.yellow),
			reverseScale(this.orange),
			reverseScale(this.red),
			reverseScale(this.purple),
			reverseScale(this.pink),
		);
	}
}

/**
 * Generates a `lenght`-color scale based on a color range (i.e. two color endpoints).
 *
 * @param range color range
 * @param length number of colors in the scale
 * @param mode interpolation mode for generating the color scale
 * @returns `length` equidistant color scale from the given color range
 */
export function generateColorScale(
	range: ColorRange,
	length: number = COLOR_SCALE_LENGTH,
	mode: chroma.InterpolationMode = "hsl",
): ColorScale {
	return chroma.scale(range).mode(mode).colors(length, null) as ColorScale;
}

/**
 * Helper function to convert a 10-tuple of hex values into a `ColorScale`.
 *
 * @param hexValues hex values of a 10-color scale
 * @returns a color scale consisting of `chroma.Color`
 */
export function toChromaArray(hexValues: Tuple<string, 10>): ColorScale {
	return hexValues.map((hex) => chroma(hex)) as ColorScale;
}
