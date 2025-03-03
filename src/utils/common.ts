import { goto } from "$app/navigation";

export class Commons {

    routeTo(path: string) {
        goto(path);
    }

}