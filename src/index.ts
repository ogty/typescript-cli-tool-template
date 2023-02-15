import { prompt } from 'enquirer';

export async function main() {
  const name = await prompt({
    type: 'input',
    name: 'name',
    message: 'Input template name',
  }).then(answer => {
    const { name } = answer as { name: string };
    return name;
  });

  console.log(`Hello ${name}!`);
}

main();
