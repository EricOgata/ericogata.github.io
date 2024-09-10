<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 1080 1080"
	width="100%"
>
	<defs>
		<filter
			id="logo_dark"
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
			<!-- <feFlood flood-color="#fff" flood-opacity="1" result="flood" /> -->
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
	<g filter="url(#logo_dark)">
		<g fill="#000">
			<path
				fill-rule="evenodd"
				stroke="#fff"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="24"
				d="M532 379c132.548 0 240 107.452 240 240 0 23.16 11.235 47.245 5.453 69.98C763.583 743.517 672 879 608 899c-94.485 29.527-234.524-82.99-287.81-180.415A80.647 80.647 0 0 1 312 719c-44.183 0-80-35.817-80-80 0-39.865 29.159-72.92 67.312-79C325.6 455.98 419.81 379 532 379ZM295.859 624.545l8.282 30.91"
			/>
		</g>
		<path
			fill-rule="evenodd"
			stroke="#fff"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
			d="M637.781 595.783c24.066 41.893 35.164 70.871 33.294 86.933C669.205 698.78 654.18 703.54 626 697"
		/>
		<circle
			cx="621"
			cy="768"
			r="40"
			fill-rule="evenodd"
			stroke="#fff"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
		/>
		<path
			fill="#fff"
			fill-rule="evenodd"
			d="M570 516c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24Zm138 0c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24Z"
		/>
		<g
			fill="#fff"
			fill-rule="evenodd"
			stroke="#fff"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="4"
			clip-rule="evenodd"
		>
			<path
				d="M662.391 482.335c3-5 60-23 80-20s49 29 49 29-27-11-52-11-60 18-60 18-20-11-17-16ZM615 482.335c-3-5-60-23-80-20s-49 29-49 29 27-11 52-11 60 18 60 18 20-11 17-16Z"
			/>
		</g>
		<path
			fill="#fff"
			fill-rule="evenodd"
			stroke="#fff"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="4"
			d="M574.19 502.354c12.422.894 26.829 4.008 43.22 9.343 4.697 1.53 12.111 2.415 22.24 2.658l.687-.017c9.778-.266 16.963-1.146 21.555-2.64 16.39-5.336 30.797-8.45 43.22-9.344 17.584-1.265 45.919.86 85.001 6.378l1.188.168v20.73c-5.003 2.198-7.549 4.38-7.637 6.545C781.482 589.635 763.64 606 723.658 606c-38.506 0-56.798-20.904-73.097-64.37-2.137-5.697-5.668-8.605-10.594-8.724l-.317-.004c-5.09 0-8.728 2.91-10.91 8.728-16.3 43.466-34.591 64.37-73.097 64.37-39.982 0-57.824-16.365-60.006-69.825-.088-2.165-2.634-4.346-7.636-6.545L488 530l-199 20 4-9 194.999-32 .001-.1c39.697-5.642 68.427-7.824 86.19-6.546Zm-9.578 6.617c-31.64-2.182-45.823 4.365-52.369 12.002-6.546 7.637-18.547 74.188 39.276 77.461 57.824 3.273 63.28-64.37 60.006-72.006-3.273-7.637-15.274-15.274-46.913-17.457Zm149.969 0c-31.64 2.183-43.64 9.82-46.914 17.457-3.273 7.637 2.183 75.28 60.006 72.006 57.824-3.273 45.823-69.824 39.276-77.461-6.546-7.637-20.729-14.184-52.368-12.002Z"
		/>
		<path
			fill="#000"
			fill-rule="evenodd"
			stroke="#fff"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
			d="M372.389 247.786c98.295-49.606 201.318-51.35 235.973 8.676a80.228 80.228 0 0 1 5.66 11.996C631.341 263.486 647 261 661 261c21 0 82 8 99 29s17 53-7 97c-16 29.333-39 47-69 53-58.329-26-106.329-39-144-39-37.671 0-75.338 2.667-113 8 .443 10.124 2.11 20.458 5 31 2.89 10.542 6.89 20.876 12 31-25.577 16.164-40.138 28.705-43.683 37.623-5.317 13.377-9.586 85.576-14 144.511l-.14 1.866h-20.03l-37.943-90.175h-41.035c-6.871-25.486-11.408-47.387-13.61-65.702-5.765-.789-12.653-.856-20.664-.199L252 499l-9.405-43.02-31.398-9.746c33.202-94.823 86.933-160.972 161.192-198.448Z"
		/>
		<path
			fill-rule="evenodd"
			stroke="#fff"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
			d="m491.753 639.02-4.838 19.407m24.838-19.406-4.838 19.406m24.838-19.406-4.838 19.406m262.332-19.406 4.838 19.406m-24.838-19.406 4.838 19.406m-24.838-19.406 4.838 19.406"
		/>
	</g>
</svg>
