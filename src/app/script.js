document.addEventListener("DOMContentLoaded", () => {
    const $seleccionArchivos = document.querySelectorAll("[id^='seleccionArchivos']"),
        $imagenPrevisualizaciones = document.querySelectorAll("[id^='imagenPrevisualizacion']");

    $seleccionArchivos.forEach(($input, index) => {
        $input.addEventListener("change", () => {
            const archivos = $input.files;
            if (!archivos || !archivos.length) {
                $imagenPrevisualizaciones[index].src = "../../assets/image-add.png";
                return;
            }
            const primerArchivo = archivos[0];
            const objectURL = URL.createObjectURL(primerArchivo);
            $imagenPrevisualizaciones[index].src = objectURL;
        });
    });
});