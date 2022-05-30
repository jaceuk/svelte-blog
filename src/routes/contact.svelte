<script type="ts">
  import MdEmail from 'svelte-icons/md/MdEmail.svelte';
  import CardTitle from '@components/CardTitle.svelte';
  import Card from '@components/Card.svelte';
  import Overlay from '@components/Overlay.svelte';
  import Loader from '@components/Loader.svelte';
  import Alert from '@components/Alert.svelte';

  interface IOutcome {
    status: number;
    message: string;
  }

  let name: string;
  let email: string;
  let message: string;

  let processing = false;
  let response: IOutcome;
  let outcome: IOutcome = { status: 0, message: '' };

  async function handleSubmit() {
    processing = true;

    try {
      const submit = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      response = await submit.json();
      outcome = response;
      console.log(outcome.message);

      name = '';
      email = '';
      message = '';
    } catch (error) {
      outcome.status = 500;
      outcome.message = 'Server failed to respond.';
      console.log(error);
    }

    processing = false;
  }
</script>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<div class="inner">
  <div class="narrowContainer">
    <div class="row">
      <Card>
        <CardTitle text="Contact form" textSize="large">
          <MdEmail slot="icon" />
        </CardTitle>

        {#if processing}
          <Overlay><Loader>Sending your message</Loader></Overlay>
        {/if}

        {#if outcome.status === 200}
          <Alert type="success">Your message was sent successfully.</Alert>
        {/if}

        {#if outcome.status === 500}
          <Alert type="error"
            >There was a problem sending your message, please try again.<br />If the problem perists please email
            info@jace.info.</Alert
          >
        {/if}

        <form on:submit|preventDefault={handleSubmit} class="stack medium">
          <div class="stack small">
            <label for="name" class="label"> Your name (required) </label>
            <input id="name" type="text" class="input" required bind:value={name} />
          </div>

          <div class="stack small">
            <label for="email" class="label">Your email address (required)</label>
            <input id="email" type="email" class="input" required bind:value={email} />
          </div>

          <div class="stack small">
            <label for="message" class="label">Your message (required)</label>
            <textarea id="message" class="input" rows={5} required bind:value={message} />
          </div>

          <input class="button submit" type="submit" value="Send your message" />
        </form>
      </Card>
    </div>
  </div>
</div>

<style type="scss">
  .inner {
    margin-top: calc(var(--size-extralarge) * -1);
    padding-bottom: var(--size-extralarge);
    background: url('../images/vader.png') no-repeat right bottom;
    display: flex;
    gap: var(--size-medium);
    flex-direction: column;
  }

  .narrowContainer {
    padding: 0 var(--size-super);

    @media (max-width: 1000px) {
      padding: 0 var(--size-large);
    }

    @media (max-width: 767px) {
      padding: 0;
    }
  }

  .label {
    display: block;
    font-weight: var(--font-weight-bold);
  }

  .input {
    width: 100%;
    padding: var(--size-base);
    border-radius: var(--border-radius-small);
    border: 1px solid var(--color-nearlyblack20);

    background: var(--color-palegrey);
  }

  .submit {
    margin: 0 auto;
  }
</style>
