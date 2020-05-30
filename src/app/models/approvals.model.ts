export interface IApprovals {
    success: boolean;
    error: string;
    result: IApprovalsDetails;
}

export interface IApprovalsDetails {
    fileApprovals: IFileApprovals[];
    dataPrepartionApprovals: IDataPrepartionApprovals[];
    reportsApprovals: IReportsApprovals[];
}

export interface IPendingApprovals {
    pendingApprovals: IApprovalsDetails;
}

export interface ICompletedApprovals {
    completedApprovals: IApprovalsDetails;
}

export interface IFileApprovals {
    approvalStatus: number,
    approvedBy: string,
    businessUnitId: number,
    businessUnit: string,
    fileTypeName: string,
    rejectedBy: string,
    rejectionReason: string,
    updatedBy: string,
    updateDate: Date,
    uploadedFileDetailsId: number,
    uploadedFileName: string
}

export interface IDataPrepartionApprovals {
    ApprovedBy: string,
    ApprovalRejectionDateTime: Date,
    BusinessUnitId: Number,
    BusinessUnit: string,
    DataPreperationGroupId: string
    RejectedBy: string,
    RejectionReason: string
}

export interface IReportsApprovals {
    ApprovedBy: string,
    ApprovalRejectionDateTime: Date,
    BusinessUnitId: Number,
    BusinessUnit: string,
    ETLGroupId: string
    RejectedBy: string,
    RejectionReason: string
}

export interface IApproved {
    FileId: Number,
    FileState: Number,
    Remarks: string
    ProcessState: Number
}

export interface IFileActionApproved {
    FileActions: IApproved[]
}

export interface IFileActionRejection {
    FileActions: IApproved[]
}

export interface IRejection {
    UploadedFileId: number,
    uploadedFileRevisionNo: number,
    IsRejected: boolean,
    RejectionRemarks: string
}

export interface IDataPreparationFileApprovalPost {
    remark: string
}
