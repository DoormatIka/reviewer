<script>
  import { base } from "$app/paths";
  import "../app.css";
</script>

<svelte:head>
  <meta content="USTL Resources (Grade 12)" property="og:title" />
  <meta content="Made by a student, for students. " property="og:description" />
  <meta 
    content="https://media.discordapp.net/attachments/1061320413373808741/1085617532804812970/favicon.png?width=560&height=560" 
    property="og:image" 
    />
  <link rel="icon" href="{base}/favicon.png?" />
  <title>USTL Resources</title>
</svelte:head>


<slot />
