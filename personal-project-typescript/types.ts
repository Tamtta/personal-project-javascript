export type subjectLMS = {
  title: string;
  lessons: number;
  id: string;
  description?: string;
};

type Sex = "male" | "female";
interface Sex1 {
  sex: Sex;
}

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
  sex: "male" | "female";
  subjects: {
    subject: string;
  }[];
  description?: string;
  id?: string;
};

export type typePupil = {
  name: {
    first: string;
    last: string;
  };
  dateOfBirth: string;
  phones: {
    phone: string;
    primary: boolean;
  }[];
  sex: "male" | "female";
  description?: string;
  id?: string;
};

export type typeGroup = {
  id: string;
  room: number;
  pupils: typePupil[]; //
};

export type typeRecord = {
  pupilId: string;
  teacherId: string;
  subjectId: string;
  lesson: number;
  mark: number;
};
