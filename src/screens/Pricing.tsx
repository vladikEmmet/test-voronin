import React from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../components/UI/Card";
import {CheckIcon} from "../components/UI/CheckIcon";
import {Button} from "../components/UI/Button";

export const Pricing = () => {
    return (
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                        Affordable pricing for every need
                    </h2>
                    <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Choose the plan that fits your budget and transcription requirements.
                    </p>
                </div>
                <div className="mx-auto w-full max-w-md space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Starter</CardTitle>
                            <CardDescription>Perfect for individuals and small teams.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-center">
                                <span className="text-4xl font-bold">$9</span>
                                <span className="text-muted-foreground">/month</span>
                            </div>
                            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                    100 minutes of transcription per month
                                </li>
                                <li>
                                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                    Searchable transcripts
                                </li>
                                <li>
                                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                    Multiple output formats
                                </li>
                                <li>
                                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                    Basic team collaboration
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button>Get Started</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Pro</CardTitle>
                            <CardDescription>For teams and businesses with higher volume needs.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-center">
                                <span className="text-4xl font-bold">$49</span>
                                <span className="text-muted-foreground">/month</span>
                            </div>
                            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                    1,000 minutes of transcription per month
                                </li>
                                <li>
                                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                    Searchable transcripts
                                </li>
                                <li>
                                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                    Multiple output formats
                                </li>
                                <li>
                                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                    Advanced team collaboration
                                </li>
                                <li>
                                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                    Enterprise-grade security and reliability
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button>Get Started</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Enterprise</CardTitle>
                            <CardDescription>Tailored solutions for large organizations.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-center">
                                <span className="text-4xl font-bold">Custom</span>
                            </div>
                            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                    Unlimited transcription volume
                                </li>
                                <li>
                                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                    Customizable workflows and integrations
                                </li>
                                <li>
                                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                    Advanced team management and controls
                                </li>
                                <li>
                                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                    Dedicated support and SLAs
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button>Contact Sales</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
};