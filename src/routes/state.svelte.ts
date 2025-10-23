export function createState() {
    let value = $state(0)

    function up() {
        value++
    }

    function down() {
        value--
    }

    return {
        get value() {
            return value
        },
        up,
        down
    }
}

export class MajaState {
    value = $state(0)

    up() {
        this.value++
    }

    down() {
        this.value--
    }
}