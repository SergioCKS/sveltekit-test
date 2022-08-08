<script>
    export let title;
    let value = 0;

    async function fetchData() {
      const response = await fetch('/', {
        method: 'POST',
        body: JSON.stringify({ a: 1 }),
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        }
      });

      const responseData = await response.json();
      value = responseData.data.b;
      console.log({ value });
    }
</script>

<h1>{title}</h1>
<button on:click={fetchData} >Fetch</button>
<p>{value}</p>
