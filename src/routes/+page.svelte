<script>
	import { goto } from '$app/navigation';

	let name = $state('');
	let debounceTimer;

	function handleInput() {
		clearInterval(debounceTimer);
		debounceTimer = setTimeout(() => {
			if (name) {
				goto(`/?name=${name.trim()}`, { keepFocus: true });
			} else {
				goto('/', { keepFocus: true });
			}
		}, 1000);
	}
</script>

<h1>Digite o nome para ver a estimativa de anos pelo nome!</h1>
<span>Digite apenas o primeiro nome e espere</span>

<input type="text" oninput={handleInput} bind:value={name} autocomplete="off" />
