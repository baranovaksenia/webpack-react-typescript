// Define a custom type 'Mods' which represents CSS class modifications.
// 'Mods' is an object that maps class names (keys) to values that are either booleans or strings.
type Mods = Record<string, boolean | string>

/**
 * Generate a space-separated string of CSS classes based on a base class, modifiers, and additional classes.
 *
 * @param cls - The base CSS class.
 * @param mods - An object of class modifiers where keys represent class names and values indicate inclusion (true) or exclusion (false) of the class.
 * @param additional - An array of additional class names to be included.
 * @returns A string containing space-separated CSS classes.
 */
export function classNames(
	cls: string,
	mods: Mods,
	additional: string[]
): string {
	// Create an array that includes the base class, additional classes, and filtered modifiers.
	return [
		cls, // Include the base class.
		...additional, // Include additional classes.
		// Filter and include class names from modifiers if their values are truthy.
		Object.entries(mods)
			.filter(([className, value]) => Boolean(value))
			.map(([className]) => className),
	].join(' ') // Combine all classes into a space-separated string.
}
