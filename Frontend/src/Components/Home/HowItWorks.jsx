import React from "react";
import {
  UserPlus,
  LayoutDashboard,
  FilePlus2,
  Edit3,
  Eye,
  Download,
  BookUserIcon,
  Zap,
} from "lucide-react";
import Title from "./Title";

const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center my-10 scroll-mt-12 pb-20 gap-10">

        {/* BADGE */}
        <div>
            <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 text-sm text-orange-600 bg-orange-400/10 rounded-full px-4 py-1.5">
                    <Zap className="w-4 h-4" />
                    <span>Working</span>
                </div>
            </div>


            <Title 
                title='How it works ?' 
                description='Follow the simple steps to create your ATS-friendly sharable resume.'
            />
        </div>

        <div>
            <div className="grid border rounded-lg max-w-6xl mx-auto border-gray-200/70 grid-cols-1 divide-y divide-gray-200/70 lg:grid-cols-3 lg:divide-x lg:divide-y-0">

                {/* Step 1 */}
                <div className="flex flex-col items-start gap-4 hover:bg-gray-50 transition p-8">
                    <div className="flex items-center gap-2 text-gray-600">
                    <UserPlus className="size-5" />
                    <h2 className="font-medium text-base">Create an Account</h2>
                    </div>
                    <p className="text-gray-500 text-sm/6 max-w-72">
                    Sign up or log in to start building your professional resume.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-start gap-4 hover:bg-gray-50 transition p-8">
                    <div className="flex items-center gap-2 text-gray-600">
                    <LayoutDashboard className="size-5" />
                    <h2 className="font-medium text-base">Go to Dashboard</h2>
                    </div>
                    <p className="text-gray-500 text-sm/6 max-w-72">
                    Access all your resumes and manage everything from one place.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-start gap-4 hover:bg-gray-50 transition p-8">
                    <div className="flex items-center gap-2 text-gray-600">
                    <FilePlus2 className="size-5" />
                    <h2 className="font-medium text-base">Create or Upload Resume</h2>
                    </div>
                    <p className="text-gray-500 text-sm/6 max-w-72">
                    Start fresh or upload an existing resume to optimize it with AI.
                    </p>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-start gap-4 hover:bg-gray-50 transition p-8">
                    <div className="flex items-center gap-2 text-gray-600">
                    <Edit3 className="size-5" />
                    <h2 className="font-medium text-base">Add or Edit Details</h2>
                    </div>
                    <p className="text-gray-500 text-sm/6 max-w-72">
                    Fill in your details and enhance content using AI suggestions.
                    </p>
                </div>

                {/* Step 5 */}
                <div className="flex flex-col items-start gap-4 hover:bg-gray-50 transition p-8">
                    <div className="flex items-center gap-2 text-gray-600">
                    <Eye className="size-5" />
                    <h2 className="font-medium text-base">Live Preview</h2>
                    </div>
                    <p className="text-gray-500 text-sm/6 max-w-72">
                    Preview your resume in real time as you make changes.
                    </p>
                </div>

                {/* Step 6 */}
                <div className="flex flex-col items-start gap-4 hover:bg-gray-50 transition p-8">
                    <div className="flex items-center gap-2 text-gray-600">
                    <Download className="size-5" />
                    <h2 className="font-medium text-base">Download or Share</h2>
                    </div>
                    <p className="text-gray-500 text-sm/6 max-w-72">
                    Download your resume or share a live link with recruiters.
                    </p>
                </div>
            </div>

        </div>
    </div>
  );
};

export default HowItWorks;
