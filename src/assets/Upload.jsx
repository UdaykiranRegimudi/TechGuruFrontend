
import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { ProgressBar } from 'primereact/progressbar';

export default function Upload() {
    const toast = useRef(null);
    const [progress, setProgress] = useState(0);
    const interval = useRef(null);

    const clear = () => {
        setProgress(0);
        toast.current.clear();
        clearInterval(interval.current);
        interval.current = undefined;
    };

    const show = () => {
        if (!interval.current) {
            toast.current.show({
                summary: 'Uploading your files.',
            });

            setProgress(0);

            if (interval.current) {
                clearInterval(interval.current);
            }

            interval.current = setInterval(() => {
                setProgress((prevProgress) => {
                    const newProgress = prevProgress + 20;

                    if (newProgress >= 100) {
                        clearInterval(interval.current);

                        return 100;
                    }

                    return newProgress;
                });
            }, 1000);
        }
    };

    return (
        <div className="card flex justify-content-center">
            <Toast
                ref={toast}
                content={({ message }) => (
                    <section className="flex p-3 gap-3 w-full bg-black-alpha-90 shadow-2 fadeindown" style={{ borderRadius: '10px' }}>
                        <i className="pi pi-cloud-upload text-primary-500 text-2xl"></i>
                        <div className="flex flex-column gap-3 w-full">
                            <p className="m-0 font-semibold text-base text-white">{message.summary}</p>
                            <p className="m-0 text-base text-700">{message.detail}</p>
                            <div className="flex flex-column gap-2">
                                <ProgressBar value={progress} showValue="false"></ProgressBar>
                                <label className="text-right text-xs text-white">{progress}% uploaded...</label>
                            </div>
                            <div className="flex gap-3 mb-3">
                                <Button label="Another Upload?" text className="p-0" onClick={clear}></Button>
                                <Button label="Cancel" text className="text-white p-0" onClick={clear}></Button>
                            </div>
                        </div>
                    </section>
                )}
            ></Toast>
            <Button onClick={show} label="View" />
        </div>
    )
}