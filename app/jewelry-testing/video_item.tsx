export default function Video_Item({ url }: { url: string }) {

    return (
        <div className={`w-[180px] h-[320px]`}>
            <iframe
                width="100%"
                height="100%"
                src={url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            >
            </iframe>
        </div>
    );
}