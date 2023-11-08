import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const customTheme: CustomThemeConfig = {
	name: 'michelememoli-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		'--theme-font-family-heading': `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '0px',
		'--theme-rounded-container': '0px',
		'--theme-border-base': '4px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '255 255 255',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #ff0a0a
		'--color-primary-50': '255 218 218', // #ffdada
		'--color-primary-100': '255 206 206', // #ffcece
		'--color-primary-200': '255 194 194', // #ffc2c2
		'--color-primary-300': '255 157 157', // #ff9d9d
		'--color-primary-400': '255 84 84', // #ff5454
		'--color-primary-500': '255 10 10', // #ff0a0a
		'--color-primary-600': '230 9 9', // #e60909
		'--color-primary-700': '191 8 8', // #bf0808
		'--color-primary-800': '153 6 6', // #990606
		'--color-primary-900': '125 5 5', // #7d0505
		// secondary | #1e679f
		'--color-secondary-50': '221 232 241', // #dde8f1
		'--color-secondary-100': '210 225 236', // #d2e1ec
		'--color-secondary-200': '199 217 231', // #c7d9e7
		'--color-secondary-300': '165 194 217', // #a5c2d9
		'--color-secondary-400': '98 149 188', // #6295bc
		'--color-secondary-500': '30 103 159', // #1e679f
		'--color-secondary-600': '27 93 143', // #1b5d8f
		'--color-secondary-700': '23 77 119', // #174d77
		'--color-secondary-800': '18 62 95', // #123e5f
		'--color-secondary-900': '15 50 78', // #0f324e
		// tertiary | #52e56f
		'--color-tertiary-50': '229 251 233', // #e5fbe9
		'--color-tertiary-100': '220 250 226', // #dcfae2
		'--color-tertiary-200': '212 249 219', // #d4f9db
		'--color-tertiary-300': '186 245 197', // #baf5c5
		'--color-tertiary-400': '134 237 154', // #86ed9a
		'--color-tertiary-500': '82 229 111', // #52e56f
		'--color-tertiary-600': '74 206 100', // #4ace64
		'--color-tertiary-700': '62 172 83', // #3eac53
		'--color-tertiary-800': '49 137 67', // #318943
		'--color-tertiary-900': '40 112 54', // #287036
		// success | #380980
		'--color-success-50': '225 218 236', // #e1daec
		'--color-success-100': '215 206 230', // #d7cee6
		'--color-success-200': '205 194 223', // #cdc2df
		'--color-success-300': '175 157 204', // #af9dcc
		'--color-success-400': '116 83 166', // #7453a6
		'--color-success-500': '56 9 128', // #380980
		'--color-success-600': '50 8 115', // #320873
		'--color-success-700': '42 7 96', // #2a0760
		'--color-success-800': '34 5 77', // #22054d
		'--color-success-900': '27 4 63', // #1b043f
		// warning | #e69e4c
		'--color-warning-50': '251 240 228', // #fbf0e4
		'--color-warning-100': '250 236 219', // #faecdb
		'--color-warning-200': '249 231 210', // #f9e7d2
		'--color-warning-300': '245 216 183', // #f5d8b7
		'--color-warning-400': '238 187 130', // #eebb82
		'--color-warning-500': '230 158 76', // #e69e4c
		'--color-warning-600': '207 142 68', // #cf8e44
		'--color-warning-700': '173 119 57', // #ad7739
		'--color-warning-800': '138 95 46', // #8a5f2e
		'--color-warning-900': '113 77 37', // #714d25
		// error | #b53b3b
		'--color-error-50': '244 226 226', // #f4e2e2
		'--color-error-100': '240 216 216', // #f0d8d8
		'--color-error-200': '237 206 206', // #edcece
		'--color-error-300': '225 177 177', // #e1b1b1
		'--color-error-400': '203 118 118', // #cb7676
		'--color-error-500': '181 59 59', // #b53b3b
		'--color-error-600': '163 53 53', // #a33535
		'--color-error-700': '136 44 44', // #882c2c
		'--color-error-800': '109 35 35', // #6d2323
		'--color-error-900': '89 29 29', // #591d1d
		// surface | #ffffff
		'--color-surface-50': '255 255 255', // #ffffff
		'--color-surface-100': '255 255 255', // #ffffff
		'--color-surface-200': '255 255 255', // #ffffff
		'--color-surface-300': '255 255 255', // #ffffff
		'--color-surface-400': '255 255 255', // #ffffff
		'--color-surface-500': '255 255 255', // #ffffff
		'--color-surface-600': '230 230 230', // #e6e6e6
		'--color-surface-700': '191 191 191', // #bfbfbf
		'--color-surface-800': '153 153 153', // #999999
		'--color-surface-900': '125 125 125' // #7d7d7d
	}
};
