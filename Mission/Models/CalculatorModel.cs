using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission.Models
{
    public class CalculatorModel
    {
        [Range(0, 100, ErrorMessage = "Enter a value between 0 and 100 for Assignments")]
        public int Assignment { get; set; }

        [Range(0, 100, ErrorMessage = "Enter a value between 0 and 100 for Group Projects")]
        public int Group { get; set; }

        [Range(0, 100, ErrorMessage = "Enter a value between 0 and 100 for Quizzes")]
        public int Quiz { get; set; }

        [Range(0, 100, ErrorMessage = "Enter a value between 0 and 100 for Exams")]
        public int Test { get; set; }

        [Range(0, 100, ErrorMessage = "Enter a value between 0 and 100 for INTEX")]
        public int Final { get; set; }

    }
}
