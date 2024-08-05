"use client";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";

function generatePricesValues() {
    let prices = [];
    for (let i = 1; i <= 5; i++) {
        prices.push(i * 100);
    }
    return prices;
}

function generateMaxPricesValues() {
    let prices = [];
    for (let i = 6; i <= 10; i++) {
        prices.push(i * 100);
    }
    return prices;
}

type FormValues = {
    address: string;
    Categories: string;
    minprice: string;
    maxprice: string;
};

export function Filter() {
    const minPrices = generatePricesValues();
    const maxPrices = generateMaxPricesValues();
    const form = useForm<FormValues>({
        defaultValues: {
            address: "",
            Categories: "",
            minprice: "",
            maxprice: "",
        },
    });

    function formSubmitHandler(data: FormValues) {
        console.log(data);
    }

    return (
        <Form {...form}>
            <form
    className="p-6 w-[95%] mx-auto flex flex-wrap gap-6 items-end bg-gray-200 rounded"
    onSubmit={form.handleSubmit(formSubmitHandler)}
>
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => {
                        return (
                            <FormItem className="flex-1 min-w-[180px]">
                                <FormLabel>Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="Search by address" {...field} />
                                </FormControl>
                            </FormItem>
                        );
                    }}
                />

                <FormField
                    control={form.control}
                    name="Categories"
                    render={({ field }) => {
                        return (
                            <FormItem className="flex-1 min-w-[180px]">
                                <FormLabel>Categories</FormLabel>
                                <Select value={field.value} onValueChange={field.onChange}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Categories" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">House</SelectItem>
                                        <SelectItem value="dark">Apartment</SelectItem>
                                        <SelectItem value="system">Office</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        );
                    }}
                />

                <FormField
                    control={form.control}
                    name="minprice"
                    render={({ field }) => {
                        return (
                            <FormItem className="flex-1 min-w-[180px]">
                                <FormLabel>Min Price</FormLabel>
                                <Select value={field.value} onValueChange={field.onChange}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Min Price" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {minPrices.map((price) => {
                                            return (
                                                <SelectItem key={price} value={price.toString()}>
                                                    {price}
                                                </SelectItem>
                                            );
                                        })}
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        );
                    }}
                />

                <FormField
                    control={form.control}
                    name="maxprice"
                    render={({ field }) => {
                        return (
                            <FormItem className="flex-1 min-w-[180px]">
                                <FormLabel>Max Price</FormLabel>
                                <Select value={field.value} onValueChange={field.onChange}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Max Price" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {maxPrices.map((price) => {
                                            return (
                                                <SelectItem key={price} value={price.toString()}>
                                                    {price}
                                                </SelectItem>
                                            );
                                        })}
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        );
                    }}
                />

                <Button className="min-w-[180px]">Apply</Button>
            </form>
        </Form>
    );
}
