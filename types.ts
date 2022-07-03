export type subjectLMS = {
  title: string;
  lessons: number;
  id: string;
  description?: string;
};

export type typeTeacher = {
  name: {
    first: string;
    last: string;
  };
  dateOfBirth: string;
  emails: {
    email: string;
    primary: boolean;
  }[];
  phones: {
    phone: string;
    primary: boolean;
  }[];
  sex: string;
  subjects: {
    subject: string;
  }[];
  description?: string;
  id?: string;
};
