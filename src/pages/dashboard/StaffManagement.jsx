import { Camera, Plus, Shield, ChevronDown, Lock } from "lucide-react";
import * as Yup from "yup";
import toast from 'react-hot-toast';
import { Field, Form, Formik } from "formik";

export default function StaffManagementPage() {
    const SchemaValidate = Yup.object({
        full_name: Yup.string().required("Full Name is required"),
        employee_role: Yup.string().required("Employee Role is required"),
        employee_id: Yup.string().required("Employee ID is required"),
        access_pin: Yup.string().required("Access Pin is required"),
        image: Yup.mixed().test(
            "fileSize",
            "File size is too large. Maximum size is 10MB.",)
    });

    const saveData = (values) => {
        const data = {
            full_name: values.full_name,
            employee_role: values.employee_role,
            employee_id: values.employee_id,
            access_pin: values.access_pin,
            image: values.image,
        }
    }

    return (
        <div className="min-h-screen bg-[#F8FAFC] px-6 py-10 flex justify-center">
            <div className="w-[896px] max-w-225">
                <div className="flex items-start justify-between">
                    <div>
                        <h2 className="text-4xl font-bold text-[#1e293b]">
                            Add New Team Member
                        </h2>

                        <p className="text-[#94a3b8] mt-2 text-sm">
                            Create a secure profile and assign access levels.
                        </p>
                    </div>

                    <div className="flex flex-col items-end">
                        <span className="text-[11px] tracking-[0.2em] text-[#94a3b8] uppercase">
                            Step 1 of 2
                        </span>

                        <div className="w-36 h-2 bg-[#dbe4ea] rounded-full mt-2 overflow-hidden">
                            <div className="w-24 h-full bg-[#19c37d] rounded-full" />
                        </div>
                    </div>
                </div>

                <div className="mt-10 bg-white rounded-[36px] shadow-[0_20px_60px_rgba(15,23,42,0.08)] p-10">
                    <Formik
                        initialValues={{ full_name: '', employee_role: '', employee_id: '', access_pin: '' }}
                        validationSchema={SchemaValidate}
                        onSubmit={saveData}>
                        <div className="flex justify-center">
                            <Field 
                                name="image"
                                type="file"
                            >
                                <div className="relative border-b border-[#edf2f7]">
                                    <div className="w-40 h-40 rounded-full border-2 border-dashed border-[#d7dee7] flex flex-col items-center justify-center text-[#94a3b8]">
                                        <Camera size={30} strokeWidth={1.8} />

                                        <span className="text-sm mt-2">Add Photo</span>
                                    </div>

                                    <button className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-lg">
                                        <Plus size={18} />
                                    </button>
                                </div>
                            </Field>
                        </div>
                        <Form className="grid grid-cols-2 gap-8">
                            <div>
                                <label className="text-xs tracking-widest uppercase text-[#94a3b8] font-semibold">
                                    Full Name
                                </label>

                                <Field
                                    name="full_name"
                                    type="text"
                                    placeholder="e.g. Marcus Aurelius"
                                    className="mt-3 w-full h-16 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] px-5 outline-none focus:border-[#19c37d] transition"
                                />
                            </div>

                            <div>
                                <label className="text-xs tracking-widest uppercase text-[#94a3b8] font-semibold">
                                    Employee Role
                                </label>

                                <Field
                                    name="employee_role"
                                    as="button"
                                    type="button"
                                    className="mt-3 w-full h-16 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] px-5 flex items-center justify-between text-[#64748b]"
                                >
                                    <span>Select a role...</span>
                                    <ChevronDown size={18} />
                                </Field>
                            </div>

                            <div>
                                <label className="text-xs tracking-widest uppercase text-[#F1F5F9] font-semibold">
                                    Employee ID
                                </label>

                                <div className="mt-3 w-full h-16 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] px-5 flex items-center justify-between">
                                    <span className="font-medium text-[#64748b]">
                                        GUSTO-1092
                                    </span>

                                    <Lock size={18} className="text-[#94a3b8]" />
                                </div>
                            </div>

                            <div>
                                <label className="text-xs tracking-widest uppercase text-[#F1F5F9] font-semibold">
                                    Access Pin (4 Digits)
                                </label>

                                <div className="mt-3 w-full h-16 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] px-8 flex items-center gap-10">
                                    <span className="font-medium text-[#10B98180] tracking-[0.3em]">
                                        • • • •
                                    </span>
                                </div>
                            </div>
                            <div className="mt-14 flex items-center justify-between">
                                <div className="flex items-center gap-3 text-[#94a3b8]">
                                    <Shield size={18} />

                                    <span className="uppercase tracking-widest text-xs font-semibold">
                                        Encrypted & Secure Storage
                                    </span>
                                </div>

                                <div className="flex items-center gap-5">
                                    <button className="h-14 px-10 rounded-2xl bg-[#F1F5F9] text-[#64748b] font-semibold hover:opacity-90 transition">
                                        Cancel
                                    </button>

                                    <button
                                        onClick={() => toast.success('Profile saved successfully!')}
                                        className="h-14 px-10 rounded-2xl bg-[#10B981] text-white font-semibold shadow-[#00BC7D33] hover:opacity-90 transition">
                                        Save Profile
                                    </button>
                                </div>
                            </div>
                        </Form>

                    </Formik>
                </div>
            </div>
        </div>
    );
}