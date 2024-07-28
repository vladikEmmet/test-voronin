import React from 'react';

export const Advantages = () => {
    return (
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto space-y-12 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful transcription
                            tools</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Our AI-powered transcription engine delivers accurate, searchable text from your videos in
                            minutes.
                        </p>
                    </div>
                </div>
                <div
                    className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold">Automated Transcription</h3>
                        <p className="text-sm text-muted-foreground">
                            Upload your videos and let our AI engine do the rest, delivering accurate transcripts in
                            minutes.
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold">Searchable Transcripts</h3>
                        <p className="text-sm text-muted-foreground">
                            Your transcripts are fully searchable, making it easy to find specific moments in your
                            videos.
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold">Editing and Formatting</h3>
                        <p className="text-sm text-muted-foreground">
                            Edit your transcripts directly in the app and format them for easy sharing and
                            collaboration.
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold">Multiple Output Formats</h3>
                        <p className="text-sm text-muted-foreground">
                            Download your transcripts in a variety of formats, including text, SRT, and VTT.
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold">Team Collaboration</h3>
                        <p className="text-sm text-muted-foreground">
                            Invite your team to review and edit transcripts, and track changes in real-time.
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold">Secure and Reliable</h3>
                        <p className="text-sm text-muted-foreground">
                            Your videos and transcripts are stored securely, with enterprise-grade encryption and
                            backup.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};