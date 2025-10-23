
<script lang="ts">
   import { fly } from 'svelte/transition';

    // let name = $state('Maja')

    // let status: 'OPEN' | 'CLOSED' = $state('OPEN')

    // let full_name = $derived(`${name} Kudlicka`)

    // function onclick() {
    //     status = status === 'OPEN' ? 'CLOSED' : 'OPEN'
    // }

    // setting state
    let formState = $state({
        name: '',
        birthday: '',
        step: 0,
        error: ''
    })

    // Like a console log but runs every time the value changes
    $inspect(formState.step)



    const questions = [
        {
            question: 'What is your name',
            id: 'name',
            type: 'text'
        },
        {
            question: 'What is your birthday',
            id: 'birthday',
            type: 'date'
        }
    ]

    $effect(() => {
        // This will be run on mounted
        console.log('on mounted')

        return () => {
            // when unmounted or destroyed
            // before effect re-runs
            console.log('on unmounted')
        }
    })

    $effect(() => {
        // This will be run when formState.step has changed
        console.log(formState.step)
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
    
    <!-- Rendering exaple -->
    {@render formStep({id: 'name', question: 'Your Name', type: 'text'})}
    {@render formStep({id: 'birthday', question: 'Your Birthday', type: 'date'})}

</main>

<!-- Snippet example -->
{#snippet formStep({id, question, type}: {id: string, question: string, type: string})}
<article>
    <div>
        <label for={id}>{question}</label>
        <input {type} {id} bind:value={formState[id]} />
    </div>
</article>
{/snippet}

<!-- Styling - scoped by default -->
<style>
    .error {
        color: red;
    }
</style>