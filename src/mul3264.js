import {add64} from './add64.js';

/**
 * Multiplies two uint32 into one uint64.
 */
export const mul3264 = (a, b) => {
	const a0 = (a >>> 16) & 0xff_ff;
	const a1 = a & 0xff_ff;
	const b0 = (b >>> 16) & 0xff_ff;
	const b1 = b & 0xff_ff;

	const x = [Math.imul(a0, b0), Math.imul(a1, b1)];
	const t = Math.imul(a0, b1);
	const u = Math.imul(a1, b0);
	const y = [(t >>> 16) | 0, (t << 16) | 0];
	const z = [(u >>> 16) | 0, (u << 16) | 0];
	return add64(x, add64(y, z));
};
