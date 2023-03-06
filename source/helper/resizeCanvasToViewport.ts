function resizeCanvasToViewport (
    canvas: HTMLCanvasElement,
    handleResizeEvent?: ( canvas: HTMLCanvasElement ) => void
) {

    const resize_observer = new ResizeObserver( entries => {

        for ( const entry of entries ) {

            const software_pixel_width = entry.contentBoxSize[ 0 ].inlineSize;
            const software_pixel_height = entry.contentBoxSize[ 0 ].blockSize;

            const hardware_pixel_width = Math.round( software_pixel_width * globalThis.devicePixelRatio );
            const hardware_pixel_height = Math.round( software_pixel_height * globalThis.devicePixelRatio );

            canvas.width = hardware_pixel_width;
            canvas.height = hardware_pixel_height;

        }

        handleResizeEvent?.( canvas );

    } );

    resize_observer.observe( canvas, { box: "content-box" } );

}

export default resizeCanvasToViewport;