import Pocketbase, { Admin, Record } from "pocketbase";
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
      pb: Pocketbase,
      user: Record | Admin | undefined
    }
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
