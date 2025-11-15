function IconMail(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" {...props}>
            <path d="M4 6h16v12H4z" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M22 6l-10 7L2 6" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}
function IconMapPin(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" {...props}>
            <path d="M12 22s7-5.33 7-12a7 7 0 1 0-14 0c0 6.67 7 12 7 12z" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}
function IconPhone(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" {...props}>
            <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.09 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.86.32 1.7.6 2.5a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.67-1.15a2 2 0 0 1 2.11-.45c.81.28 1.65.48 2.5.6A2 2 0 0 1 22 16.92z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            />
        </svg>
    );
}
function IconMessage(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" {...props}>
            <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}
function IconShare(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" {...props}>
            <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M8.6 11.3l6.8-3.6M8.6 12.7l6.8 3.6" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer className="bg-brand-navy text-white">
            <div className="container-app grid gap-10 py-12 md:grid-cols-3">
                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <IconMapPin className="mt-1" />
                        <div>
                            <h4 className="font-semibold">PT. Menara Indonesia</h4>
                            <p className="opacity-80">
                                Jl. Raya Cirendeu, No.61 Ciputat,
                                <br />
                                Tangerang Selatan 15419
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <IconMapPin className="mt-1" />
                        <div>
                            <h4 className="font-semibold">PT. Menara Pengetahuan Indonesia</h4>
                            <p className="opacity-80">
                                Jl. Raya Cirendeu, No.61 Ciputat,
                                <br />
                                Tangerang Selatan 15419
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex items-start gap-3">
                        <IconMapPin className="mt-1" />
                        <div>
                            <h4 className="font-semibold">Surabaya Branch Office</h4>
                            <p className="opacity-80">Jl. Darmo Permai III Surabaya</p>
                        </div>
                    </div>
                    <p className="flex items-center gap-2 opacity-90">
                        <IconPhone /> Telp: 031-837-05277
                    </p>
                    <p className="flex items-center gap-2 opacity-90">
                        <IconMail /> surabaya@m-knowsconsulting.com
                    </p>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="container-app grid gap-8 py-8 md:grid-cols-2">
                    <div>
                        <h4 className="mb-2 font-semibold">Contact us</h4>
                        <p className="flex items-center gap-2 opacity-90">
                            <IconMessage /> 021-388-900-52 &nbsp;|&nbsp; 0812-1042-8281
                        </p>
                        <p className="mt-1 flex items-center gap-2 opacity-90">
                            <IconMail /> learning@m-knowsconsulting.com
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-3 flex items-center gap-2 font-semibold">
                            <IconShare /> Our Social Media
                        </h4>
                        <div className="flex flex-wrap items-center gap-4 opacity-90">
                            <a href="#" className="underline hover:opacity-100">
                                LinkedIn
                            </a>
                            <a href="#" className="underline hover:opacity-100">
                                YouTube
                            </a>
                            <a href="#" className="underline hover:opacity-100">
                                Instagram
                            </a>
                            <a href="#" className="underline hover:opacity-100">
                                Facebook
                            </a>
                            <a href="#" className="underline hover:opacity-100">
                                TikTok
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black/20 py-4 text-center text-sm opacity-80">© {new Date().getFullYear()} M-Knows Consulting. All rights reserved.</div>
        </footer>
    );
}
