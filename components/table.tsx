import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from "next/image"
import VisibilityIcon from '@mui/icons-material/Visibility';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const invoices = [
    {
        url: './Images/profile.jpg',
        text: "Believe you can and you're halfway there.",
        paymentStatus: "May 10",
        totalAmount: "1.4k",
        paymentMethod: "Credit Card",
    },
    {
        url: './Images/profile.jpg',
        text: "Every moment is a fresh beginning.",
        paymentStatus: "June 12",
        totalAmount: "3.3k",
        paymentMethod: "PayPal",
    },
    {
        url: './Images/profile.jpg',
        text: "Dream big and dare to fail",
        paymentStatus: "April 11",
        totalAmount: "200k",
        paymentMethod: "Bank Transfer",
    },
    {
        url: './Images/profile.jpg',
        text: "No pressure, no diamonds.",
        paymentStatus: "May 12",
        totalAmount: "450k",
        paymentMethod: "Credit Card",
    },
    {
        url: './Images/profile.jpg',
        text: "Turn your wounds into wisdom.",
        paymentStatus: "April 1",
        totalAmount: "5.5k",
        paymentMethod: "PayPal",
    },
    {
        url: './Images/profile.jpg',
        text: "Do what you love, love what you do.",
        paymentStatus: "June 19",
        totalAmount: "200k",
        paymentMethod: "Bank Transfer",
    },
]

export function TableLayout() {
    return (
        <div className="">
            <h1 className="font-semibold mb-5 mt-10 px-4">Post Activity</h1>
            <div className="overflow-y-auto scroll-smooth bg-white rounded-md p-2 custom-scrollbar">
                <Table>
                    <TableBody>
                        {invoices.map((invoice) => (
                            <TableRow key={invoice.text} className="flex justify-center items-center w-full">
                                <TableCell className="font-normal text-sm flex justify-start items-center gap-2 w-[250px]">
                                    <Image
                                        src={invoice.url}
                                        alt={invoice.text}
                                        width={300}
                                        height={120}
                                        className="w-10 h-10 rounded-md shadow-md"
                                    />
                                    {invoice.text}
                                </TableCell>
                                <TableCell className="w-[90px]">{invoice.paymentStatus}</TableCell>
                                <TableCell className="text-right flex justify-center items-center"><VisibilityIcon className="text-greenDefault" />{invoice.totalAmount}</TableCell>
                                <TableCell><MoreHorizIcon /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
