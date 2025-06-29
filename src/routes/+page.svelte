<script>
	import { goto } from '$app/navigation';
	import { navigating } from '$app/stores';

	import Loader from '$lib/components/Loader.svelte';

	let { data } = $props();

	let name = $state(data.name || '');
	let debounceTimer;

	function handleInput() {
		clearInterval(debounceTimer);
		debounceTimer = setTimeout(() => {
			if (name.trim() !== (data.name || '')) {
				if (name) {
					goto(`/?name=${name.trim()}`, { keepFocus: true });
				} else {
					goto('/', { keepFocus: true });
				}
			}
		}, 1000);
	}

	$effect(() => {
		name = data.name || '';
	});
</script>

<div class="container">
	<h1>ESTIME A IDADE POR UM NOME!</h1>
	<span>Digite um nome e aguarde.</span>

	<input
		type="text"
		oninput={handleInput}
		bind:value={name}
		placeholder="Fulaninho..."
		autocomplete="off"
	/>

	<div class="result">
		{#if $navigating !== null}
			<Loader />
		{:else if data.age !== null}
			<strong>{data.name}</strong> têm <strong>{data.age}</strong> anos
		{/if}
	</div>
</div>

<style>
	.container {
		background: #e0e0e0;
		height: 400px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 24px 48px;
		border-radius: 50px;
		box-shadow:
			20px 20px 60px #bebebe,
			-20px -20px 60px #ffffff;

		& h1 {
			font-size: 2.4rem;
			text-align: center;
			margin: 0 32px 10px 32px;
			@media (max-width: 600px) {
				font-size: 1.6rem;
			}
		}

		& span {
			font-size: 1.6rem;
			color: #666666;
			margin-bottom: 20px;
			@media (max-width: 600px) {
				font-size: 1.2rem;
			}
		}

		& input {
			font-size: 1.6rem;
			font-family: 'Space Grotesk', sans-serif;
			height: 40px;
			border-radius: 4px;
			background: #f2f2f2;
			border: 1px solid #cccccc;
			outline: none;
			padding: 0 10px;
			margin: 0 32px 20px 32px;
			@media (max-width: 600px) {
				width: 200px;
				font-size: 1.4rem;
			}
		}

		& div.result {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 6px;
			height: 40px;
			font-size: 1.6rem;
			@media (max-width: 600px) {
				font-size: 1.4rem;
			}
		}
	}
</style>
