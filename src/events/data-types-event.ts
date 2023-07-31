import { Subjects } from "./subjects";

export interface CompanyDisabledEvent {
    subject: Subjects.CompanyDisabled,
    data: {
        companyId: String,
        status: Boolean,
    }
}

export interface UserCreatedEvent {
    subject: Subjects.UserCreated,
    data: {
        firstName: String,
        lastName: String,
        email: String,
        position?: String,
        department?: String,
        crew?: String,
        phone?: String,
        altPhone?: String,
        orgName?: String,
        supervisor?: {
            name: String,
            email: String,
        },
        group?: {
            name: String,
        },
        address?: {
            address: String,
            city: String,
            code: String,
        },
        company: {
            companyId: String,
            name: String,
        },
        status?: Boolean,
        authId: String,
        employeeId?: String,
    }
}

export interface UserUpdatedEvent {
    subject: Subjects.UserUpdated,
    data: {
        authId: String,
        firstName: String,
        lastName: String,
        position?: String,
        phone?: String
    }
}

export interface UserDeletedEvent {
    subject: Subjects.UserDeleted,
    data: {
        isDeleted: Boolean,
        companyId: String,
        userId: String,
    }
}

export interface CompanyAdminCreatedEvent {
    subject: Subjects.CompanyAdminCreated,
    data: {
        firstName: String,
        lastName: String,
        email: String,
        password: String,
        companyId: String,
        companyName: String,
        position?: String,
        phone?: String,
    }
}

export interface NotificationEvent {
    subject: Subjects.Notification,
    data: {
        entityType: String,
        entityId?: String,
        companyId?: String,
        companyName?: String,
        link?: String,
        expired?: Boolean,
        isSMS?: Boolean,
        isEmail?: Boolean,
        replyTo?: String,
        from: String,
        user: {
            userId: String,
            fullName: String,
            email: String,
            phone: String
        },
        templateType: String,
        tag?: {
        }
    }
}