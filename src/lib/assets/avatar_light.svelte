<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1080 1080">
	<defs>
		<filter
			id="logo_light"
			width="140%"
			height="140%"
			x="-20%"
			y="-20%"
			color-interpolation-filters="linearRGB"
			filterUnits="objectBoundingBox"
			primitiveUnits="userSpaceOnUse"
		>
			<feMorphology
				in="SourceAlpha"
				operator="dilate"
				radius="20 20"
				result="morphology"
			/>
			<feFlood flood-color="#fff" flood-opacity="1" result="flood" />
			<feComposite
				in="flood"
				in2="morphology"
				operator="in"
				result="composite"
			/>
			<feMerge result="merge">
				<feMergeNode in="composite" />
				<feMergeNode in="SourceGraphic" />
			</feMerge>
		</filter>
	</defs>
	<g filter="url(#logo_light)">
		<path
			fill="#fff"
			fill-rule="evenodd"
			stroke="#000"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
			d="M532 379c132.548 0 240 107.452 240 240 0 23.16 11.235 47.245 5.453 69.98C763.583 743.517 672 879 608 899c-94.485 29.527-234.524-82.99-287.81-180.415A80.647 80.647 0 0 1 312 719c-44.183 0-80-35.817-80-80 0-39.865 29.159-72.92 67.312-79C325.6 455.98 419.81 379 532 379ZM295.859 624.545l8.282 30.91"
		/>
		<path
			stroke="#000"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
			d="M637.781 595.783c24.066 41.893 35.164 70.871 33.294 86.933C669.205 698.78 654.18 703.54 626 697"
		/>
		<circle
			cx="621"
			cy="768"
			r="40"
			stroke="#000"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
		/>
		<path
			fill="#000"
			fill-rule="evenodd"
			d="M570 516c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24Zm138 0c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24Z"
		/>
		<path
			fill="#000"
			fill-rule="evenodd"
			stroke="#000"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="4"
			d="M662.391 482.335c3-5 60-23 80-20s49 29 49 29-27-11-52-11-60 18-60 18-20-11-17-16Zm-47.391 0c-3-5-60-23-80-20s-49 29-49 29 27-11 52-11 60 18 60 18 20-11 17-16Z"
			clip-rule="evenodd"
		/>
		<g
			fill-rule="evenodd"
			stroke="#000"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path
				fill="#0C0C0C"
				stroke-width="8"
				d="M621.319 523.941c5.647-23.53-.941-48.941-76.236-48.941-75.294 0-79.058 30.118-81.882 48.941-2.823 18.824-13.176 91.294 57.412 94.118 70.588 2.823 95.059-70.588 100.706-94.118Zm36.366 0c-5.647-23.53.94-48.941 76.235-48.941 75.294 0 79.059 30.118 81.882 48.941 2.824 18.824 13.177 91.294-57.411 94.118-70.589 2.823-95.06-70.588-100.706-94.118Z"
			/>
			<path
				stroke-width="8"
				d="M594.966 482.529h89.412m-89.412 28.236c15.247-1.255 30.306-1.883 45.176-1.883 14.87 0 29.616.628 44.236 1.883"
			/>
			<path stroke-width="16" d="m510.484 517.568-216.657 38.203" />
		</g>
		<path
			fill="#000"
			fill-rule="evenodd"
			stroke="#000"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
			d="M372.389 247.786c98.295-49.606 201.318-51.35 235.973 8.676a80.228 80.228 0 0 1 5.66 11.996C631.341 263.486 647 261 661 261c21 0 82 8 99 29s17 53-7 97c-16 29.333-39 47-69 53-58.329-26-106.329-39-144-39-37.671 0-75.338 2.667-113 8 .443 10.124 2.11 20.458 5 31 2.89 10.542 6.89 20.876 12 31-25.577 16.164-40.138 28.705-43.683 37.623-5.317 13.377-9.586 85.576-14 144.511l-.14 1.866h-20.03l-37.943-90.175h-41.035c-6.871-25.486-11.408-47.387-13.61-65.702-5.765-.789-12.653-.856-20.664-.199L252 499l-9.405-43.02-31.398-9.746c33.202-94.823 86.933-160.972 161.192-198.448Z"
		/>
		<path
			stroke="#000"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
			d="m491.753 639.02-4.838 19.407m24.838-19.406-4.838 19.406m24.838-19.406-4.838 19.406m262.332-19.406 4.838 19.406m-24.838-19.406 4.838 19.406m-24.838-19.406 4.838 19.406"
		/>
	</g>
</svg>
