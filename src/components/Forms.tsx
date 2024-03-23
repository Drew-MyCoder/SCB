"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolver/zod"
import { Button } from "../components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../components/ui/form"
import { Input } from "../components/ui/input"


const formSchema = z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    email: z.string().email(),
    password: z
        .string()
        .min(3)
        .max(20)
});



export function ProfileForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }:any) => (
                        <FormItem>
                            <FormLabel>First name</FormLabel>
                            <FormControl>
                                <Input placeholder="first name here" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }: any) => (
                        <FormItem>
                            <FormLabel>First name</FormLabel>
                            <FormControl>
                                <Input placeholder="last name here" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                    />    
                    <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}