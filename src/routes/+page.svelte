
<script lang="ts">
    import Header from './Header.svelte';

    // let name = $state('Maja')

    // let status: 'OPEN' | 'CLOSED' = $state('OPEN')

    // let full_name = $derived(`${name} Kudlicka`)

    // function onclick() {
    //     status = status === 'OPEN' ? 'CLOSED' : 'OPEN'
    // }

    let formState = $state({
        name: '',
        birthday: '',
        step: 0,
        error: ''
    })
</script>

<!-- <Header {name} />

<h2>{full_name}</h2>

<input type="text" bind:value={name} />

<p>The store is now {status}</p>

<button {onclick}>Toggle Status</button> -->

<main>

    <p>Step: {formState.step}</p>

    {#if formState.error}
        <p class="error">{formState.error}</p>
    {/if}
    
    {@render formStep({id: 'name', question: 'Your Name', type: 'text'})}
    {@render formStep({id: 'birthday', question: 'Your Birthday', type: 'date'})}
</main>

{#snippet formStep({id, question, type}: {id: string, question: string, type: string})}
<article>
    <div>
        <label for={id}>{question}</label>
        <input {type} {id} bind:value={formState[id]} />
    </div>
</article>
{/snippet}

<style>
    .error {
        color: red;
    }
</style>