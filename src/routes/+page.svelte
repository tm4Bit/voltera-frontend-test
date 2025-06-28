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
	<h1>Informe o nome para estimar a idade!</h1>
	<span>Digite o nome e espere</span>

	<input
		type="text"
		oninput={handleInput}
		bind:value={name}
		placeholder="Fulaninho..."
		autocomplete="off"
	/>

	{#if $navigating !== null}
		<Loader />
	{:else if data.age !== null}
		<p>
			<strong>{data.name}</strong> têm <strong>{data.age}</strong> anos
		</p>
	{/if}
</div>

<style>
	.container {
		height: 480px;
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 50px;
		background: #e0e0e0;
		box-shadow:
			20px 20px 60px #bebebe,
			-20px -20px 60px #ffffff;
		& h1 {
			text-align: center;
			width: 70%;
			margin-bottom: 10px;
		}

		& span {
			color: #666;
			margin-bottom: 20px;
		}

		& input {
			font-size: 1.2rem;
			font-family: 'Space Grotesk', sans-serif;
			width: 250px;
			max-width: 400px;
			height: 40px;
			padding: 0 10px;
			border-radius: 4px;
			background: #f2f2f2;
			border: 1px solid #ccc;
			outline: none;
			margin-bottom: 20px;
		}

		& p {
			font-size: 1.1rem;
			height: 40px;
		}
	}
</style>
