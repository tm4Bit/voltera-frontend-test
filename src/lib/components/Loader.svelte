<div class="loader">
	<div class="dot"></div>
	<div class="dot"></div>
	<div class="dot"></div>
</div>

<style>
	.loader {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 40px;
	}

	.dot {
		background-color: #666;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		margin: 0 3px;
		animation: jump 1.4s ease-in-out infinite;
	}

	.dot:nth-of-type(2) {
		animation-delay: 0.2s;
	}

	.dot:nth-of-type(3) {
		animation-delay: 0.4s;
	}

	@keyframes jump {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-5px);
		}
	}
</style>
